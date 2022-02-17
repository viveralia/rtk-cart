import { FC } from "react";

import { currencyFormatter } from "../../../utils/formatters";
import { CartProduct } from "../types/cart-product";
import {
  CartProductItemImg,
  CartProductItemContainer,
  CartProductItemName,
  CartProductItemBody,
  CartProductItemButton,
} from "./CartProductItem.styles";

interface CartProductItemProps {
  cartProduct: CartProduct;
  onDecrementQuantity: (product: CartProduct) => void;
  onIncrementQuantity: (product: CartProduct) => void;
  onRemoveItem: (product: CartProduct) => void;
}

const CartProductItem: FC<CartProductItemProps> = ({
  cartProduct,
  onDecrementQuantity,
  onIncrementQuantity,
  onRemoveItem,
}) => {
  const handleDecrement = () => onDecrementQuantity(cartProduct);
  const handleIncrement = () => onIncrementQuantity(cartProduct);
  const handleRemove = () => onRemoveItem(cartProduct);

  return (
    <CartProductItemContainer>
      <CartProductItemImg src={cartProduct.image} alt={cartProduct.title} />
      <CartProductItemBody>
        <CartProductItemName>{cartProduct.title}</CartProductItemName>
        <p>{currencyFormatter.format(cartProduct.price)}</p>
        <div>
          <CartProductItemButton onClick={handleDecrement}>&minus;</CartProductItemButton>
          <span> {cartProduct.quantity} </span>
          <CartProductItemButton onClick={handleIncrement}>&#x2B;</CartProductItemButton>
        </div>
      </CartProductItemBody>
      <CartProductItemButton onClick={handleRemove}>x</CartProductItemButton>
    </CartProductItemContainer>
  );
};

export default CartProductItem;
