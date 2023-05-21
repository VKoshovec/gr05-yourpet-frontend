import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNoticesByCategory, addNoticesFavorite, removeNoticesFavorite } from '../../api/notices';


export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchByCategory',
  async (params, thunkAPI) => {
    try {
       const data = await getNoticesByCategory(params);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const fetchAddNoticesFavorite = createAsyncThunk(
  'notices/addNoticesFavorite',
  async ({id, userID}, thunkAPI) => {
    try {
     await addNoticesFavorite(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRemoveNoticesFavorite = createAsyncThunk(
  'notices/removeNoticesFavorite',
  async ({id, userID}, thunkAPI) => {
    try {
    await removeNoticesFavorite(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
