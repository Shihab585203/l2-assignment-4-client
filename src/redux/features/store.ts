import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import searchReducer from "./searchSlice";
import paginationReducer from "./paginationSlice";
import cartReducer from "./cartSlice";
import {
  loadCartFromLocalStorage,
  savedCartToLocalStorage,
} from "../../assets/Utlis/LocalStorageUtils";
import paymentReducer from "./paymentSlice";

//Load Cart From LocalStorage
const preloadedState = {
  cart: {
    items: loadCartFromLocalStorage() || [],
  },
};

export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    pagination: paginationReducer,
    payment: paymentReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  preloadedState,

  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(baseApi.middleware),
});

store.subscribe(() => {
  savedCartToLocalStorage(store.getState().cart.items);
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
