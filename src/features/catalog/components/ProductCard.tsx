import { FC } from "react";

import { Product } from "../types/product";
import {
  ProductContainer,
  ProductDescription,
  ProductFooter,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./ProductCard.styles";
import { currencyFormatter } from "../../../utils/formatters";
import { Button } from "../../../components";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCartClick = () => onAddToCart(product);

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductFooter>
        <ProductPrice>{currencyFormatter.format(product.price)}</ProductPrice>
        <Button onClick={handleAddToCartClick}>Add to cart</Button>
      </ProductFooter>
    </ProductContainer>
  );
};

export default ProductCard;
