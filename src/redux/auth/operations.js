import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://yourpet-api.onrender.com/';

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
      const { data } = await axios.post('api/auth/register', credentials);
      setAuthHeader(data.token);
      return data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('api/auth/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const signout = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('api/auth/logout');
      clearAuthHeader();
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token, isLoggedIn } = getState().auth;
    // if (!isLoggedIn) return rejectWithValue();
    // if (token === 'null') return rejectWithValue('Unable to fetch user');
    if (!token) return rejectWithValue('Unable to fetch user');

    try {
      setAuthHeader(token);
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);
