import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
        query: () => ({
            url: '/products',
            method: 'GET'
        })
    }),
    //Fetch a Product By Id
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET'
      })
    })
  }),
});


export const { useGetProductsQuery } = baseApi;