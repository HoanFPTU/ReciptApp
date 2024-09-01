import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ResponseCategory, ResponseDetailMeal, ResponseMeal} from './Type';

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
                                                                                                                                                                                                  getFullMealByID: builder.query<ResponseDetailMeal, string>({
      query: (id: string) => `lookup.php?i=${id}`,
    }),
    searchMealByName: builder.query<ResponseDetailMeal, string>({
      query: (name: string) => `search.php?s=${name}`,
    }),
  }),
});
export const {
  useGetTrendingMealQuery,
  useGetCategoryMealQuery,
  useGetFullMealByIDQuery,
  useSearchMealByNameQuery,
} = FoodAPI;
