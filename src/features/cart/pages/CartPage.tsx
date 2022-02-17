import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";

import { Button, Container, Header, Text, Title } from "../../../components";
import { currencyFormatter } from "../../../utils/formatters";
import { clearCart, removeProduct } from "../cartSlice";
import CartProductItem from "../components/CartProductItem";
import { CartProductList, StickyContainer } from "./CartPage.styles";

const CartPage: FC = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const numberOfProducts = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  const total = products.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity * currentValue.price,
    0
  );

  return (
    <Container boxShadow="-10px 0px 13px -7px #eee">
      <StickyContainer>
        <div>
          <Header>
            <Title>Cart ({numberOfProducts})</Title>
            <Button disabled={products.length === 0} onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </Header>
          <CartProductList>
            {products.length === 0 && <Text>Your cart is empty</Text>}
            {products.map((cartProduct) => (
              <CartProductItem
                key={cartProduct.id}
                cartProduct={cartProduct}
                onDecrementQuantity={(p) => console.log(p)}
                onIncrementQuantity={(p) => console.log(p)}
                onRemoveItem={(p) => dispatch(removeProduct(p))}
              />
            ))}
          </CartProductList>
        </div>
        {products.length > 0 && <Button>Pay {currencyFormatter.format(total)}</Button>}
      </StickyContainer>
    </Container>
  );
};

export default CartPage;
