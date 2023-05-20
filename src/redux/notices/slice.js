import { createSlice } from '@reduxjs/toolkit';
import { initialNotices } from '../../presets/initial';
import { fetchNoticesByCategory, fetchAddNoticesFavorite, fetchRemoveNoticesFavorite } from './operation';
import { logDOM } from '@testing-library/react';

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
      .addCase(fetchAddNoticesFavorite.fulfilled, (state, action) => {

        const notice = state.notices.data.find(item => item._id === action.meta.arg.id);
        // console.log(targetObject.favorite, 'payload');
        if (notice) {
          notice.favorite.push(action.meta.arg.userId);
        }
        // state.notices.data.favorite.push(action.meta.arg)
      })
      .addCase(fetchRemoveNoticesFavorite.fulfilled, (state, action) => {
        const notice = state.notices.data.find(item => item._id === action.meta.arg.id);
        if (notice) {
          const index = notice.favorite.indexOf(action.meta.arg.userId);
          if (index !== -1) {
            notice.favorite.splice(index, 1);
          }
        }
      });
  },
});

export const { setFilter } = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
