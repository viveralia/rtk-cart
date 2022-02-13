import { Product } from "../../catalog/types/product";

export interface CartProduct extends Product {
  quantity: number;
}
