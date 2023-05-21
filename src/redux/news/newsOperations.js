import { createAsyncThunk } from '@reduxjs/toolkit';
import getAllNews from '../../api/news';

export const getNews = createAsyncThunk(
  'news/getNews',
  async (params, thunkAPI) => {
    try {
      const data = await getAllNews(params);
      console.log('data-operation =========', data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
