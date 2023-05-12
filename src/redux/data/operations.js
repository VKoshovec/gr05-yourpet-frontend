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
  // 'notices/getAll/category',
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await axios.get('/notices');
      // return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
