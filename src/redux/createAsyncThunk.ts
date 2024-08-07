import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import storage from '../storage/storage';
import {BookMarkType, STORAGE_KEY} from '../constant/constant';

// First, create the thunk
export const fetchBookmarks = createAsyncThunk<BookMarkType[], void>(
  'bookmarks/fetch',
  async () => {
    // console.log('Oke nè');
    let response: BookMarkType[] = [];
    await storage
      .load({
        key: STORAGE_KEY.bookmark,
      })
      .then((rs: BookMarkType[]) => {
        response = rs;
      });
    return response;
  },
);
// export const handleBookmark = createAsyncThunk<string, BookMarkType>(
//   'bookmarks/handle',
//   async bookmark => {
//     let message = '';
//     storage
//       .load({key: STORAGE_KEY.bookmark})
//       .then((data: any) => {
//         const findData = data.find(
//           (Bookmark: BookMarkType) => Bookmark.id === bookmark.id,
//         );

//         if (findData) {
//           storage.save({
//             key: STORAGE_KEY.bookmark,
//             data: data.filter(
//               (Bookmark: BookMarkType) => Bookmark.id !== bookmark.id,
//             ),
//           });
//           message = 'Remove successfully bookmark ' + bookmark.title;
//         } else {
//           storage.save({
//             key: STORAGE_KEY.bookmark,
//             data: [...data, bookmark],
//           });
//           message = 'add successfully bookmark ' + bookmark.title;
//           // Toast.show({
//           //   type: 'success',
//           //   text1: 'Success Storage add data',
//           //   visibilityTime: 1000,
//           // });
//         }
//       })
//       .catch(error => {
//         console.log('new', error);
//         storage.save({key: STORAGE_KEY.bookmark, data: [bookmark]});
//         message = 'add successfully bookmark ' + bookmark.title;
//       });

//     return message;
//   },
// );
export const addBookmark = createAsyncThunk<BookMarkType, BookMarkType>(
  'bookmarks/add',
  async bookmark => {
    // storage
    //   .load({key: STORAGE_KEY.bookmark})
    //   .then((data: any) => {
    //     const findData = data.find(
    //       (Bookmark: BookMarkType) => Bookmark.id === bookmark.id,
    //     );
    //     if (!findData) {
    //       storage.save({
    //         key: STORAGE_KEY.bookmark,
    //         data: [...data, bookmark],
    //       });
    //     }
    //     return bookmark;
    //   })
    //   .catch(error => {
    //     console.log('new', error);
    //     storage.save({key: STORAGE_KEY.bookmark, data: [bookmark]});
    //     return bookmark;
    //   });
    console.log(bookmark.id);
    let data: BookMarkType[] = [];
    try {
      data = await storage.load({key: STORAGE_KEY.bookmark});
    } catch (error) {
      // If no data found or error occurs, initialize with an empty array
      console.log('Error loading bookmarks:', error);
    }

    // Check if the bookmark already exists
    const findData = data.find((b: BookMarkType) => b.id === bookmark.id);
    console.log(findData, 'oke');
    if (!findData) {
      // Save new bookmark
      await storage.save({
        key: STORAGE_KEY.bookmark,
        data: [...data, bookmark],
      });
    }

    return bookmark;
  },
);
export const removeBookmark = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>('bookmarks/remove', async (id, {rejectWithValue}) => {
  let data: BookMarkType[] = [];
  try {
    data = await storage.load({key: STORAGE_KEY.bookmark});
  } catch (error) {
    // If no data found or error occurs, initialize with an empty array
    console.log('Error loading bookmarks:', error);
  }
  const updatedData = data.filter(
    (bookmark: BookMarkType) => bookmark.id !== id,
  );
  await storage.save({
    key: STORAGE_KEY.bookmark,
    data: updatedData,
  });
  return id;
});
export const isBookmark = createAsyncThunk<boolean, string>(
  'bookmarks/isBookmark',
  async id => {
    let data: BookMarkType[] = [];
    try {
      data = await storage.load({key: STORAGE_KEY.bookmark});
    } catch (error) {
      console.log(error);
      return false;
    }
    return data.findIndex(bookmark => bookmark.id === id) > -1 ? true : false;
  },
);
interface BookmarksState {
  entities: BookMarkType[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}
const initialState = {
  entities: [],
  loading: 'idle',
} satisfies BookmarksState as BookmarksState;

// Then, handle actions in your reducers:
export const BookMarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    // addBookmark: (state, action: PayloadAction<BookMarkType>) => {
    //   state.entities.push(action.payload);
    // },
    // removeBookmark: (state, action: PayloadAction<string>) => {
    //   state.entities = state.entities.filter(bookmark => bookmark.id !== action.payload);
    // },
  },
  extraReducers: builder => {
    builder.addCase(fetchBookmarks.fulfilled, (state, action) => {
      state.entities = action.payload;
    });
    builder.addCase(addBookmark.fulfilled, (state, action) => {
      console.log('action payload add:' + action.payload.id);
      state.entities.push(action.payload);
    });
    builder.addCase(removeBookmark.fulfilled, (state, action) => {
      console.log('action payload remove' + action.payload);
      state.entities = state.entities.filter(
        bookmark => bookmark.id !== action.payload,
      );
    });
  },
});
