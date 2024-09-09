import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rapidAPI = createApi({
  reducerPath: "rapidAPICore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "e8af08ed0emshe8e79e70232b44dp1f74bdjsn624a2984c7fc"
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
