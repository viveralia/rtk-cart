import { FC, useState } from "react";

import { Button, Container, Header, Text, Title } from "../../../components";
import CartProductItem from "../components/CartProductItem";
import { CartProduct } from "../types/cart-product";
import { CartProductList, StickyContainer } from "./CartPage.styles";

const CartPage: FC = () => {
  const [cartProducts] = useState<CartProduct[]>([]);

  return (
    <Container boxShadow="-10px 0px 13px -7px #eee">
      <StickyContainer>
        <div>
          <Header>
            <Title>Cart (0)</Title>
            <Button disabled={cartProducts.length === 0}>Clear cart</Button>
          </Header>
          <CartProductList>
            {cartProducts.length === 0 && <Text>Your cart is empty</Text>}
            {cartProducts.map((cartProduct) => (
              <CartProductItem
                key={cartProduct.id}
                cartProduct={cartProduct}
                onDecrementQuantity={console.log}
                onIncrementQuantity={console.log}
                onRemoveItem={console.log}
              />
            ))}
          </CartProductList>
        </div>
        {cartProducts.length > 0 && <Button>Checkout</Button>}
      </StickyContainer>
    </Container>
  );
};

export default CartPage;
