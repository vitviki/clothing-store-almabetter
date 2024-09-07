import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rapidAPI = createApi({
  reducerPath: "rapidAPICore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://real-time-amazon-data.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "2c141ef8b4msha341a9c7ad828b4p199b68jsn400254ca1736"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBestSellers: builder.query({
      query: (categoryId) =>
        `/products-by-category?category_id=${categoryId}&page=1&country=IN&sort_by=REVIEWS&product_condition=ALL&is_prime=false`,
    }),
    getData: builder.query({
      query: (queryString) =>
        `/search?query=${queryString}&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false`,
    }),
  }),
});

export const { useGetBestSellersQuery, useGetDataQuery } = rapidAPI;
