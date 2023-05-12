// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPets = createAsyncThunk(
  'pets/getAll',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/pets');
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getNews = createAsyncThunk(
  'news/getAll',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/news');
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getNotices = createAsyncThunk(
  'notices/getAll',
  // 'notices/getAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {auth} = getState();
            const data = await api.fetchContacts(auth.token);
            return data;
      // const { data } = await axios.get('/pets');
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
