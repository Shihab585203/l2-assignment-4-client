import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/products/categories",
        method: "GET",
      }),
    }),
    getProducts: builder.query({
      query: (params: {searchTerm?: string, category?: string, page?: number, limit?: number}) => ({
        url: "/products",
        method: "GET",
        params: { searchTerm: params.searchTerm || "", 
          category: params.category || "", 
          page: params.page || 1, 
          limit: params.limit || 10 },
      }),
    }),
    //Fetch a Product By Id
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    createPaymentData: builder.mutation({
      query: (payment) => ({
        url: "/payment/create-payment-data",
        method: "POST",
        body: payment,
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (grandTotalPrice) => ({
        url: "/payment/create-payment-intent",
        method: "POST",
        body: { price: grandTotalPrice },
        headers: { "Content-Type": "application/json" },
      }),
    }),
    postCartProduct: builder.mutation({
      query: (product) => ({
        url: "/cart/post-cart-product",
        method: "POST",
        body: product,
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getCartProducts: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
    deleteCartProduct: builder.mutation({
      query: (_id) => ({
        url: `/cart/delete-cart-product/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreatePaymentDataMutation,
  useCreatePaymentIntentMutation,
  usePostCartProductMutation,
  useGetCartProductsQuery,
  useDeleteCartProductMutation,
} = baseApi;
