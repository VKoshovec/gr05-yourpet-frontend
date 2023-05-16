import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: {
   searchParams:''
  },
  byAge: {
    '3-12m': false,
    '1year': false,
    '2year': false,
  },
  byGender: {
    'female': false,
    'male': false,
  }
};

 const filterSlice = createSlice({
  name: 'noticesFilter',
  initialState,
  reducers: {
    setFilter(state, action) {
      console.log(action.payload,'---redux state---');
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const noticesFilterSlice =filterSlice.reducer;
