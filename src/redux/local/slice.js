import { createSlice } from '@reduxjs/toolkit';
import { initialLocal } from '../../presets/initial';
import { signup, signin, signout, refresh } from '../auth/operations';
import { getNews } from '../data/operations';
import {
  fetchNoticesByCategory,
  fetchRemoveNoticesFavorite,
  fetchAddNoticesFavorite,
} from '../notices/operation';

const handlePending = state => {
  state.error = null;
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const localSlice = createSlice({
  name: 'local',
  initialState: initialLocal,
  reducers: {
    setError(state, { payload }) {
      state.setError = payload;
    },
    // setFilter(state, { payload }) {
    //   state.filter = payload;
    // },
    // modalState(state) {
    //   state.modalShow = !state.modalShow;
    // },
  },
  extraReducers: builder => {
    builder
      // fulfilled
      .addCase(signup.fulfilled, handleFulfilled)
      .addCase(signin.fulfilled, handleFulfilled)
      .addCase(signout.fulfilled, handleFulfilled)
      .addCase(refresh.fulfilled, handleFulfilled)

      .addCase(getNews.fulfilled, handleFulfilled)

      .addCase(fetchNoticesByCategory.fulfilled, handleFulfilled)
      .addCase(fetchAddNoticesFavorite.fulfilled, handleFulfilled)
      .addCase(fetchRemoveNoticesFavorite.fulfilled, handleFulfilled)

      //pending
      .addCase(signup.pending, handlePending)
      .addCase(signin.pending, handlePending)
      .addCase(signout.pending, handlePending)
      .addCase(refresh.pending, handlePending)

      .addCase(getNews.pending, handlePending)

      .addCase(fetchNoticesByCategory.pending, handlePending)
      .addCase(fetchAddNoticesFavorite.pending, handlePending)
      .addCase(fetchRemoveNoticesFavorite.pending, handlePending)

      //rejected
      .addCase(signup.rejected, handleRejected)
      .addCase(signin.rejected, handleRejected)
      .addCase(signout.rejected, handleRejected)
      .addCase(refresh.rejected, handleRejected)

      .addCase(getNews.rejected, handleRejected)

      .addCase(fetchNoticesByCategory.rejected, handleRejected)
      .addCase(fetchAddNoticesFavorite.rejected, (state, { payload }) => {
        state.error = 'Available only to registered users';
        state.isLoading = false;
      })

      .addCase(fetchRemoveNoticesFavorite.rejected, handleRejected);
  },
});

export const localReducer = localSlice.reducer;
// export const { setFilter, modalState, setError } = localSlice.actions;
export const { setError } = localSlice.actions;
