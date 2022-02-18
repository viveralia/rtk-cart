import { motion } from "framer-motion";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../app/store";
import { Button, Container, Header, Text, Title } from "../../../components";
import { currencyFormatter } from "../../../utils/formatters";
import { clearCart, decrementQuantity, incrementQuantity, removeProduct } from "../cartSlice";
import CartProductItem from "../components/CartProductItem";
import { CartProduct } from "../types/cart-product";
import { CartProductList, StickyContainer } from "./CartPage.styles";

const CartPage: FC = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const numberOfProducts = products.reduce((p, c) => p + c.quantity, 0);
  const totalToPay = products.reduce((p, c) => p + c.quantity * c.price, 0);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const handleDecrement = useCallback(
    (product: CartProduct) => {
      dispatch(decrementQuantity({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  const handleIncrement = useCallback(
    (product: CartProduct) => {
      dispatch(incrementQuantity({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (product: CartProduct) => {
      dispatch(removeProduct(product));
    },
    [dispatch]
  );

  return (
    <Container boxShadow="-10px 0px 13px -7px #eee">
      <StickyContainer>
        <div>
          <Header>
            <Title>
              Cart{" "}
              <motion.span
                key={numberOfProducts}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0.25 }}
                transition={{ duration: 0.25 }}
              >
                ({numberOfProducts})
              </motion.span>
            </Title>
            <Button disabled={numberOfProducts === 0} onClick={handleClearCart}>
              Clear cart
            </Button>
          </Header>
          <CartProductList>
            {!numberOfProducts && <Text>Your cart is empty</Text>}
            {products.map((cartProduct) => (
              <CartProductItem
                key={cartProduct.id}
                cartProduct={cartProduct}
                onDecrementQuantity={handleDecrement}
                onIncrementQuantity={handleIncrement}
                onRemoveItem={handleRemove}
              />
            ))}
          </CartProductList>
        </div>
        {!!numberOfProducts && (
          <Button>
            Pay{" "}
            <motion.span
              key={totalToPay}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.25 }}
              transition={{ duration: 0.25 }}
            >
              {currencyFormatter.format(totalToPay)}
            </motion.span>
          </Button>
        )}
      </StickyContainer>
    </Container>
  );
};

export default CartPage;
