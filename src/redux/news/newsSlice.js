import { createSlice } from '@reduxjs/toolkit';

import { getNews } from './newsOperations';

// const pendingHandler = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const rejectedHandler = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    totalPage: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getNews.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data;
        console.log(action.payload);
        state.totalPage = action.payload.total;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const newsReducer = newsSlice.reducer;
