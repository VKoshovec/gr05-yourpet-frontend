import { createSlice } from '@reduxjs/toolkit';
import { initialNotices } from '../../presets/initial';
import { fetchNoticesByCategory, fetchAddNoticesFavorite, fetchRemoveNoticesFavorite } from './operation';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialNotices,
  reducers: {
    setFilter(state, action) {
      state.additionalFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.fulfilled, (state, { payload }) => {
        state.notices = payload;
      })
      .addCase(fetchAddNoticesFavorite.fulfilled, (state, { payload }) => {
        state.notices.data.favorite.push(payload)
      })
  },
});

export const { setFilter } = noticesSlice.actions;

export const  noticesReducer = noticesSlice.reducer;
