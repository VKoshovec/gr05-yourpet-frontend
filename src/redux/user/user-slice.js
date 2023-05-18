import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  updateUser,
  updateAvatar,
  deletePets,
} from '../../redux/user/user-operations';

const initialState = {
  user: {},
  image: '',
  pets: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.image = payload.image;
        state.pets = payload.pets;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateAvatar.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.image = payload.image;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateAvatar.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deletePets.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePets.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePets.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// export const { deletePet, deleteFavoriteObj } = userSlice.actions;
// export default userSlice.reducer;

const userReducer = userSlice.reducer;
export default userReducer;
