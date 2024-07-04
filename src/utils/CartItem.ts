import { Product } from "@/data/data";

export default interface CartItem {
  product: Product;
  count: number;
}
