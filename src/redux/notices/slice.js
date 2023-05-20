import { createSlice } from '@reduxjs/toolkit';
import { initialNotices } from '../../presets/initial';
import { fetchNoticesByCategory } from './operation';

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
  },
});

export const { setFilter } = noticesSlice.actions;

export const  noticesReducer = noticesSlice.reducer;
