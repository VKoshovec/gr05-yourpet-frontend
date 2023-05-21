import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, signout, refresh, updateAvatar } from './operations';
import { initialAuth } from '../../presets/initial';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(signout.fulfilled, state => (state = initialAuth))
      .addCase(signout.rejected, state => (state = initialAuth))
      .addCase(refresh.rejected, state => (state = initialAuth));
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
