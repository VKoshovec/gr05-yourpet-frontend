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

export const fetchAddFavorite = createAsyncThunk(
  "notices/addFavorite",
  async({name, number}, {rejectWithValue, getState}) => {
      try {
          const {auth} = getState();
          const result = await api.addContact({name, number}, auth.token);
          return result;
          // const { data } = await axios.post('/notices/addFavorite');
      // return data;
      }
      catch({response}) {
          return rejectWithValue(response.data);
      }
  },
  {
      condition: ({name}, {getState}) => {
          const {contacts} = getState();
          const isPresentContact = contacts.items.find(element => 
              element.name.toLowerCase() === name.toLowerCase()
          );
  
          if (isPresentContact) { 
              alert('Contact is already exist!')
              return false;
          }
      }
  }
);

export const fetchDeleteFavorite = createAsyncThunk(
  "notices/deleteFavorite",
  async(id, {rejectWithValue, getState}) => {
      try {
          const {auth} = getState();
          await api.deleteContact(id, auth.token);
          return id;
          // const { data } = await axios.delete('/notices/deleteFavorite');
          // return data;
      }
      catch({response}) {
          return rejectWithValue(response.data);
      }
  }
);
