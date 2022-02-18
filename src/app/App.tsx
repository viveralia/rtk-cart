import { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { GlobalStyle } from "./App.styles";
import AppRouter from "./routes/AppRouter";
import { store, persistor } from "./store";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
