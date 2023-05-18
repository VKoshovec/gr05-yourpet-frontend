import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// import { getUserId } from './user-selectors';
// import { getUserToken } from 'redux/auth/selectors';

axios.defaults.baseURL = 'https://yourpet-api.onrender.com/api/';

// const setUserHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearUserHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const getCurrentUser = createAsyncThunk(
  'user/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      //   const token = getState(getUserToken);
      //   if (token === null) {
      //     return rejectWithValue('Error');
      //   }

      //   setUserHeader(token);

      const data = await axios.get('user/current');
      console.log(data);
      return data;
    } catch ({ response }) {
      console.log(response.data);
      return rejectWithValue(response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/updateInfoUser',
  async (updateUser, { rejectWithValue, getState }) => {
    try {
      //   const token = getState(getUserToken);
      //   if (token === null) {
      //     return rejectWithValue('Error');
      //   }

      //   setUserHeader(token);

      const { data } = await axios.patch('/user/update', updateUser);
      console.log(data);

      return data;
    } catch ({ response }) {
      console.log(response.data);
      return rejectWithValue(response.data.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (image, { rejectWithValue, getState }) => {
    console.log(image);

    const formData = new FormData();
    formData.append('avatar', image);

    try {
      //   const token = getState(getUserToken);
      //   if (token === null) {
      //     return rejectWithValue('Error');
      //   }

      //   setUserHeader(token);

      const { data } = await axios.patch('/user/avatars', image, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      console.log(data);
      return data;
    } catch ({ response }) {
      console.log(response.data);
      return rejectWithValue(response.data.message);
    }
  }
);

export const deletePets = createAsyncThunk(
  'user/deletePets',
  async (id, { rejectWithValue, getState }) => {
    try {
      //   const token = getState(getUserToken);
      //   if (token === null) {
      //     return rejectWithValue('Error');
      //   }

      //   setUserHeader(token);

      const { data } = await axios.delete(`/pets/${id}`);

      console.log(data);
      return data;
    } catch ({ response }) {
      console.log(response.data);
      return rejectWithValue(response.data.message);
    }
  }
);
