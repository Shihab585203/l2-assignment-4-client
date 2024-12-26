import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (searchTerm = "", page = 1, limit = 10) => ({
        url: "/products",
        method: "GET",
        params: { searchTerm, page, limit },
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
        body: payment
      })
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
        url: '/cart',
        method: 'GET',
      })
    }),
    deleteCartProduct: builder.mutation({
      query: (_id) => ({
        url: `/cart/delete-cart-product/${_id}`,
        method: "DELETE",
      })
    })
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreatePaymentDataMutation,
  useCreatePaymentIntentMutation,
  usePostCartProductMutation,
  useGetCartProductsQuery,
  useDeleteCartProductMutation
} = baseApi;
