import { createSlice } from '@reduxjs/toolkit';
import { initialLocal } from '../../presets/initial';
import { signup, signin, signout, refresh } from '../auth/operations';
import { getPets, getNews } from '../data/operations';

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
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    modalState(state) {
      state.modalShow = !state.modalShow;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, handleFulfilled)
      .addCase(signin.fulfilled, handleFulfilled)
      .addCase(signout.fulfilled, handleFulfilled)
      .addCase(refresh.fulfilled, handleFulfilled)

      .addCase(getPets.fulfilled, handleFulfilled)
      .addCase(getNews.fulfilled, handleFulfilled)

      .addCase(signup.pending, handlePending)
      .addCase(signin.pending, handlePending)
      .addCase(signout.pending, handlePending)
      .addCase(refresh.pending, handlePending)
      .addCase(getPets.pending, handlePending)
      .addCase(getNews.pending, handlePending)

      .addCase(signup.rejected, handleRejected)
      .addCase(signin.rejected, handleRejected)
      .addCase(signout.rejected, handleRejected)
      .addCase(refresh.rejected, handleRejected)

      .addCase(getPets.rejected, handleRejected)
      .addCase(getNews.rejected, handleRejected);
  },
});

export const localReducer = localSlice.reducer;
export const { setFilter, modalState } = localSlice.actions;