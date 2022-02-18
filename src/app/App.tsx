import { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { CartPage } from "../features/cart";
import { CatalogPage } from "../features/catalog";
import { AppContainer, GlobalStyle } from "./App.styles";
import { store, persistor } from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppContainer>
          <CatalogPage />
          <CartPage />
        </AppContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
