import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence>
      <CartProductItemContainer
        as={motion.article}
        key={cartProduct.id}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.15 }}
      >
        <CartProductItemImg
          as={motion.img}
          key={cartProduct.quantity}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.25 }}
          transition={{ duration: 0.25 }}
          src={cartProduct.image}
          alt={cartProduct.title}
        />
        <CartProductItemBody>
          <CartProductItemName
            as={motion.h3}
            key={cartProduct.quantity}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0.25 }}
            transition={{ duration: 0.25 }}
          >
            {cartProduct.title}
          </CartProductItemName>
          <p>{currencyFormatter.format(cartProduct.price)}</p>
          <div>
            <CartProductItemButton onClick={handleDecrement}>&minus;</CartProductItemButton>
            <motion.span
              key={cartProduct.quantity}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.25 }}
              transition={{ duration: 0.25 }}
            >
              {" "}
              {cartProduct.quantity}{" "}
            </motion.span>
            <CartProductItemButton onClick={handleIncrement}>&#x2B;</CartProductItemButton>
          </div>
        </CartProductItemBody>
        <CartProductItemButton onClick={handleRemove}>x</CartProductItemButton>
      </CartProductItemContainer>
    </AnimatePresence>
  );
};

export default CartProductItem;
