import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import searchReducer from "./searchSlice";
import paginationReducer from "./paginationSlice";
import cartReducer from "./cartSlice";
import paymentReducer from "./paymentSlice";
import categoryReducer from "./categorySlice";
import sortingReducer from "./sortingSlice";


export const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
    pagination: paginationReducer,
    payment: paymentReducer,
    filteringCategory: categoryReducer,
    sorting: sortingReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
