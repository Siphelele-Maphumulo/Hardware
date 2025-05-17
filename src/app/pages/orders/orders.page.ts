import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderMenuPage } from '../popup/order-menu/order-menu.page';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
orders = [{
  "date": "Today, 16 Jun 2022",
  "order": [{
            "id": "01",
            "image": "001.jpg",
            "title": "Mozzarella",
            "amount": "34.10",
            "transId": "11741980",
            "time": "20 Min",
            "status": "CONFIRM",
  },
  {
    "id": "02",
    "image": "002.jpg",
    "title": "switch cover",
    "amount": "45,99",
    "transId": "58741980",
    "time": "20 Min",
    "status": "CANCELLED",
},
{
  "id": "06",
  "image": "006.jpg",
  "title": "Generator",
  "amount": "3999,99",
  "transId": "23081980",
  "time": "05 Min",
  "status": "CONFIRM",
  }

  ]
},
{
  "date": "30 Dec 2022",
"order": [{
"id": "07",
"image": "007.jpg",
"title": "Geyser",
"amount": "4999,99",
"transId": "58745212",
"time": "26 Min",
"status": "CONFIRM",

},
{
  "id": "03",
  "image": "003.jpg",
  "title": "Wheel Barrow",
  "amount": "899,99",
  "transId": "23081980",
  "time": "10 Min",
  "status": "CANCELLED",

  }

  ]
}

  ]

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

segmentChanged(ev) {
  console.log(ev.detail.value);
}

async presentPopover(ev) {
  const popover = await this.popoverController.create({
    component : OrderMenuPage,
    event: ev,
    mode: 'ios',
    translucent: true
  });

  await popover.present();

}

}
