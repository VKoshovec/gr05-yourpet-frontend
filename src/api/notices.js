import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://project-backend-a7yf.onrender.com/',
  // params: {
  //   api_key: '65bf756d8028470116d86303f5d05e74',
  // },
});

export const getNoticesByCategory = async (category) => {
  const { data } = await instance.get('api/notices', {
    params : { category },
  })
  return data;
  };



