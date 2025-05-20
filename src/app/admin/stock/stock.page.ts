import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IonContent } from '@ionic/angular';
import { Subscription } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit, OnDestroy {
  @ViewChild('stockChart', { static: false }) stockChartRef: ElementRef;
  @ViewChild('salesChart', { static: false }) salesChartRef: ElementRef;
  @ViewChild(IonContent) content: IonContent;

  stockChart: any;
  salesChart: any;

  products: any[] = [];
  receipts: any[] = [];

  subscriptions: Subscription[] = [];

  summaryData = {
    totalProducts: 0,
    lowStockItems: 0,
    topProduct: null,
  };

  lowStockItems: any[] = [];
  topSellingProducts: any[] = [];
  averageStock = 0;
  categories: string[] = [];

  // Filters
  timeRange = '30';
  selectedCategory = 'all';

  constructor(private firestore: AngularFirestore) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    if (this.stockChart) this.stockChart.destroy();
    if (this.salesChart) this.salesChart.destroy();
  }

  async loadData() {
    await Promise.all([this.loadProducts(), this.loadReceipts()]);
    this.analyzeData();
    this.createCharts();
  }

  refreshData() {
    this.loadData();
  }

  loadProducts(): Promise<void> {
    return new Promise<void>((resolve) => {
      const sub = this.firestore
        .collection('products')
        .valueChanges({ idField: 'id' })
        .subscribe((products) => {
          this.products = products;
          this.categories = [...new Set(products.map((p: any) => p.catID))];
          resolve();
        });
      this.subscriptions.push(sub);
    });
  }

  loadReceipts(): Promise<void> {
    return new Promise<void>((resolve) => {
      const sub = this.firestore
        .collection('receipts')
        .valueChanges()
        .subscribe((receipts) => {
          this.receipts = receipts;
          resolve();
        });
      this.subscriptions.push(sub);
    });
  }

  analyzeData() {
    const totalStock = this.products.reduce(
      (sum, product) => sum + product.qty,
      0
    );
    this.averageStock = totalStock / (this.products.length || 1); // prevent divide by zero

    this.lowStockItems = this.products
      .filter((p) => p.qty < this.averageStock)
      .sort((a, b) => a.qty - b.qty);

    const productSales = {};

    this.receipts.forEach((receipt) => {
      (receipt.items || []).forEach((item) => {
        if (!productSales[item.id]) {
          productSales[item.id] = { id: item.id, sales: 0, revenue: 0 };
        }
        productSales[item.id].sales += item.quantity;
        productSales[item.id].revenue += item.price * item.quantity;
      });
    });

    this.topSellingProducts = this.products
      .map((product) => {
        const salesData = productSales[product.prodID] || {
          sales: 0,
          revenue: 0,
        };
        return {
          ...product,
          sales: salesData.sales,
          revenue: salesData.revenue,
        };
      })
      .filter((p) => p.sales > 0)
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 10)
      .map((p, index) => ({ ...p, rank: index + 1 }));

    this.summaryData = {
      totalProducts: this.products.length,
      lowStockItems: this.lowStockItems.length,
      topProduct: this.topSellingProducts[0] || null,
    };
  }

  createCharts() {
    // Destroy old charts
    if (this.stockChart) this.stockChart.destroy();
    if (this.salesChart) this.salesChart.destroy();

    // Stock Chart
    const stockCtx = this.stockChartRef.nativeElement.getContext('2d');
    this.stockChart = new Chart(stockCtx, {
      type: 'bar',
      data: {
        labels: this.products.map((p) => p.title).slice(0, 10),
        datasets: [
          {
            label: 'Stock Quantity',
            data: this.products.map((p) => p.qty).slice(0, 10),
            backgroundColor: this.products
              .map((p) =>
                p.qty < this.averageStock * 0.3
                  ? 'rgba(255, 99, 132, 0.7)'
                  : p.qty < this.averageStock * 0.7
                  ? 'rgba(255, 206, 86, 0.7)'
                  : 'rgba(75, 192, 192, 0.7)'
              )
              .slice(0, 10),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Quantity' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const product = this.products[context.dataIndex];
                const status =
                  product.qty < this.averageStock * 0.3
                    ? 'Low'
                    : product.qty < this.averageStock * 0.7
                    ? 'Medium'
                    : 'High';
                return `${product.title}: ${product.qty} (${status})`;
              },
            },
          },
        },
      },
    });

    // Sales Chart
    const salesCtx = this.salesChartRef.nativeElement.getContext('2d');
    this.salesChart = new Chart(salesCtx, {
      type: 'pie',
      data: {
        labels: this.topSellingProducts.map((p) => p.title),
        datasets: [
          {
            label: 'Units Sold',
            data: this.topSellingProducts.map((p) => p.sales),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              '#C7C7C7',
              '#5366FF',
              '#FF6347',
              '#3CB371',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' },
          tooltip: {
            callbacks: {
              label: (context) => {
                const product = this.topSellingProducts[context.dataIndex];
                const revenue = new Intl.NumberFormat('en-ZA', {
                  style: 'currency',
                  currency: 'ZAR',
                }).format(product.revenue);
                return `${product.title}: ${product.sales} units (${revenue})`;
              },
            },
          },
        },
      },
    });
  }

  applyFilters() {
    this.loadData(); // Simplified for demo. Filtering logic can be added.
  }

  getStockLevelColor(qty: number): string {
    return qty < this.averageStock * 0.3
      ? 'danger'
      : qty < this.averageStock * 0.7
      ? 'warning'
      : 'success';
  }

  getStockLevelText(qty: number): string {
    return qty < this.averageStock * 0.3
      ? 'LOW'
      : qty < this.averageStock * 0.7
      ? 'MEDIUM'
      : 'HIGH';
  }
}
