import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Category } from "../categories/types";
import { Product } from "./types/product";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => `products`,
    }),
    getProductsByCategory: builder.query<Product[], Category>({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = catalogApi;
