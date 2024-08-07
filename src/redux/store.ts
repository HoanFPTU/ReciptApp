import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {FoodAPI} from '../api/FoodAPI';
import { BookMarksSlice, fetchBookmarks } from './createAsyncThunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {[FoodAPI.reducerPath]: FoodAPI.reducer,
    bookmarks: BookMarksSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(FoodAPI.middleware),
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Khai báo các hooks tùy chỉnh
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
