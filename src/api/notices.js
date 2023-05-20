import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://yourpet-api.onrender.com/',
  // params: {
  //   api_key: '65bf756d8028470116d86303f5d05e74',
  // },
// });

export const getNoticesByCategory = async ({ category, search }) => {
  const { data } = await axios.get('api/notices', {
    params : {  category, search },
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
  const { data } = await axios.post(`api/notices/favorite/${id}`);
}

export const removeNoticesFavorite = async (id ) => {
  const { data } = await axios.delete(`api/notices/favorite/${id}`);
}
