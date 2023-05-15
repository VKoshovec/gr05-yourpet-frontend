import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, signout, refresh } from './operations';
import { initialAuth } from '../../presets/initial';

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, { payload }) => (state = payload))
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
  })
      .addCase(refresh.fulfilled, (state, { payload }) => (state = payload))
      .addCase(signout.fulfilled, (state) => (state = initialAuth))
      .addCase(refresh.rejected, (state) => (state = initialAuth));
  },
});

const authReducer = authSlice.reducer;
export default authReducer;