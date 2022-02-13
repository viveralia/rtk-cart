import { FC } from "react";

import { CartPage } from "../features/cart";
import { CatalogPage } from "../features/catalog";
import { AppContainer, GlobalStyle } from "./App.styles";

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <CatalogPage />
        <CartPage />
      </AppContainer>
    </>
  );
};

export default App;
