import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signup = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      // const { data } = await axios.post('/users/signup', credentials);
      // setAuthHeader(data.token);
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      // const { data } = await axios.post('/users/signin', credentials);
      // setAuthHeader(data.token);
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const signout = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      // await axios.post('/users/signout');
      clearAuthHeader();
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token, isLoggedIn } = getState().auth;
    if (!isLoggedIn) return rejectWithValue();
    if (token === 'null') return rejectWithValue('Unable to fetch user');

    try {
      setAuthHeader(token);
      // const { data } = await axios.get('/users/refresh');
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
