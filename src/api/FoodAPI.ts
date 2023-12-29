import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ResponseCategory, ResponseMeal} from './Type';

export const FoodAPI = createApi({
  reducerPath: 'FoodAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
  }),
  endpoints: builder => ({
    getTrendingMeal: builder.query<ResponseMeal, void>({
      query: () => 'search.php?s=a',
    }),
    getCategoryMeal: builder.query<ResponseCategory, void>({
      query: () => 'categories.php',
    }),
  }),
});
export const {useGetTrendingMealQuery, useGetCategoryMealQuery} = FoodAPI;
