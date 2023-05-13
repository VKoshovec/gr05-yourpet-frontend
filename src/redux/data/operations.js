import axios from 'axios';
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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/notices');
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const getNoticesCategory = createAsyncThunk(
  'notices/category',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/notices/category');
      return data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const fetchAddFavorite = createAsyncThunk(
  "notices/addFavorite",
  async({category, image, location, date, sex}, {rejectWithValue, getState}) => {
      try {
        const {auth} = getState();
        const { data } = await axios.post('/notices/addFavorite', {category, image, location, date, sex}, auth.token);
        return data;
      }
      catch ({ message }) {
        return rejectWithValue(message);
      }
  },
  {
      condition: ({id}, {getState}) => {
          const {notices} = getState();
          const isPresentNoticeFavorite = notices.items.find(element => 
              element.id === id );
  
          if (isPresentNoticeFavorite) { 
              alert('Notice is already exist!')
              return false;
          }
      }
  }
);

export const fetchDeleteFavorite = createAsyncThunk(
  "notices/deleteFavorite",
  async({id}, {rejectWithValue, getState}) => {
      try {
          const {auth} = getState();
          const { data } = await axios.delete('/notices/deleteFavorite', id, auth.token);
          return data;
      }
      catch ({ message }) {
        return rejectWithValue(message);
      }
  }
);
