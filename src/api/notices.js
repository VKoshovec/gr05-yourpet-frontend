import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://yourpet-api.onrender.com/',
  // params: {
  //   api_key: '65bf756d8028470116d86303f5d05e74',
  // },
// });

export const getNoticesByCategory = async ({ category, search, page }) => {
  const { data } = await axios.get(`api/notices/${category}`, {
    params : { search, page, perpage : 6 },
  })
  return data;
  };

// export const getNoticesByFilter= async ({filterValue, category}) => {
//   const { data } = await axios.get('api/notices', {
//     params : {  ...filterValue.byAge, ...filterValue.byGender, ...filterValue.search, category },
//   })
//   return data;
// };

export const addNoticesFavorite = async (id ) => {
  await axios.post(`api/notices/favorite/${id}`);
}

export const removeNoticesFavorite = async (id ) => {
  await axios.delete(`api/notices/favorite/${id}`);
}

export const deleteNotices = async (id) => {
  await axios.delete(`api/notices/${id}`);
}