import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartProduct } from "./types/cart-product";

export interface CartState {
  products: CartProduct[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const isProductAlreadyInTheCart = state.products.some((p) => p.id === action.payload.id);

      if (isProductAlreadyInTheCart) {
        const productIndex = state.products.findIndex((p) => p.id === action.payload.id);
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push(action.payload);
      }
    },
    clearCart: () => initialState,
    removeProduct: (state, action: PayloadAction<CartProduct>) => {
      const productIndex = state.products.findIndex((p) => p.id === action.payload.id);
      state.products.splice(productIndex, 1);
    },
    incrementQuantity: (state, action: PayloadAction<CartProduct>) => {
      const productIndex = state.products.findIndex((p) => p.id === action.payload.id);
      state.products[productIndex].quantity += action.payload.quantity || 1;
    },
    decrementQuantity: (state, action: PayloadAction<CartProduct>) => {
      const productIndex = state.products.findIndex((p) => p.id === action.payload.id);

      if (state.products[productIndex].quantity === 1) {
        state.products.splice(productIndex, 1);
        return;
      }

      state.products[productIndex].quantity -= action.payload.quantity || 1;
    },
  },
});

export const { addProduct, clearCart, removeProduct, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
