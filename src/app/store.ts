import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import cartReducer from "../features/cart/cartSlice";
import { catalogApi } from "../features/catalog/catalogApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoriesApi } from "../features/categories/categoriesApi";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [catalogApi.reducerPath, categoriesApi.reducerPath],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  [catalogApi.reducerPath]: catalogApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(catalogApi.middleware, categoriesApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
