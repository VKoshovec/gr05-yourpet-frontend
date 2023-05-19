import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNoticesByCategory } from '../../api/notices';


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


