import axios from 'axios';

const api_news = axios.create({
  baseURL: 'https://yourpet-api.onrender.com/api',
});

const getAllNews = async params => {
  const res = await api_news.get(`/news`, {
    params,
  });

  return res.data;
};

export default getAllNews;
