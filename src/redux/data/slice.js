// import { createSlice } from '@reduxjs/toolkit';
// import { initialData } from '../../presets/initial';
// import { getPets, getNews,
//     getNotices,
//     getNoticesCategory, fetchAddNotice, fetchDeleteNotice } from './operations';
//
// const dataSlice = createSlice({
//   name: 'data',
//   initialState: initialData,
//   extraReducers: builder => {
//     builder
//       .addCase(getPets.fulfilled, (state, { payload }) => {
//         state.posts = payload;
//       })
//       .addCase(getNews.fulfilled, (state, { payload }) => {
//         state.comments = payload;
//       })
//       .addCase(getNotices.fulfilled, (state, { payload }) => {
//         state.notices = payload;
//       })
//       .addCase(getNoticesCategory.fulfilled, (state, { payload }) => {
//         state.notices.category = payload;
//       })
//       .addCase(fetchAddNotice.fulfilled, (state, { payload }) => {
//         state.notices.push(payload);
//       })
//       .addCase(fetchDeleteNotice.fulfilled, (state, { payload }) => {
//         state.notices = payload;
//         const index = state.notices.findIndex(item => item.id === payload);
//         state.notices.splice(index, 1);
//       });
//   },
// });
//
// const dataReducer = dataSlice.reducer;
// export default dataReducer;
