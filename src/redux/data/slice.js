import { createSlice } from '@reduxjs/toolkit';
import { initialData } from '../../presets/initial';
import { getPets, getNews, getNotices } from './operations';

const dataSlice = createSlice({
  name: 'data',
  initialState: initialData,
  extraReducers: builder => {
    builder
      .addCase(getPets.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.comments = payload;
      })
      .addCase(getNotices.fulfilled, (state, { payload }) => {
        state.comments = payload;
      });
  },
});

const dataReducer = dataSlice.reducer;
export default dataReducer;