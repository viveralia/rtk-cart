import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Category } from "./types/category";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
