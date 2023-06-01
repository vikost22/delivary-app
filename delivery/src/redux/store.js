import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { deliveryApi } from "./services/deliveryApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deliveryApi.middleware),
  devTools: true
});
