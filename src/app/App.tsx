import { FC } from "react";
import { Provider } from "react-redux";

import { CartPage } from "../features/cart";
import { CatalogPage } from "../features/catalog";
import { AppContainer, GlobalStyle } from "./App.styles";
import { store } from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AppContainer>
        <CatalogPage />
        <CartPage />
      </AppContainer>
    </Provider>
  );
};

export default App;
