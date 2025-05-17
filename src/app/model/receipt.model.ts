export interface ReceiptItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Receipt {
  id: string;
  items: ReceiptItem[];
  totalAmount: number;
  timestamp: Date;
}
