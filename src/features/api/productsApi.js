// src/features/api/productsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Assuming data is stored in the public folder
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: ({ category, minPrice, maxPrice }) => {
        // Start with the base URL
        let url = `/products.json?`;

        // Conditionally add category to URL
        if (category !== 'All') {
          url += `category=${category}&`;
        }

        // Conditionally add price filter if minPrice and maxPrice are provided
        if (minPrice !== undefined && maxPrice !== undefined) {
          url += `minPrice=${minPrice}&maxPrice=${maxPrice}`;
        }

        console.log("Fetching URL:", url); // Log to check the formed URL
        return url;
      },
      transformResponse: (response, meta, arg) => {
        const { category, minPrice, maxPrice } = arg;

        // First, filter by category
        const categoryFiltered = category === 'All' ? response : response.filter(
          (product) => product.category === category
        );

        // Now filter by price range
        const filteredProducts = categoryFiltered.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );

        return filteredProducts;
      },
    }),
  }),
});

export const { useGetProductsByCategoryQuery } = productsApi;
