import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rapidAPI = createApi({
  reducerPath: "rapidAPICore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "f9e9202ec7msh6871c11f2229f9dp1481f2jsnd3b8872e05f3"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBestSellers: builder.query({
      query: (category) =>
        `/best-sellers?category=${category}&type=BEST_SELLERS&page=1&country=IN`,
    }),
    getData: builder.query({
      query: (queryString) =>
        `/search?query=${queryString}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false`,
    }),
    getProductDetails: builder.query({
      query: (asin) => `/product-details?asin=${asin}&country=IN`,
    }),
  }),
});

export const {
  useGetBestSellersQuery,
  useGetDataQuery,
  useGetProductDetailsQuery,
} = rapidAPI;
