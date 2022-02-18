import { Category } from "../../categories/types";
import { ProductRating } from "./rating";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: ProductRating;
}
