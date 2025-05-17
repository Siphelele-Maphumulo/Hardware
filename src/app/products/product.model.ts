export interface Product {
  id?: string; // Add this to hold the Firestore document ID
  prodID: string;
  image: string;
  title: string;
  amount: number;
  catID: string;
  qty: number;
  item_total_amt: number;
}
