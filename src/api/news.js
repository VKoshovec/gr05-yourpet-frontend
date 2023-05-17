import axios from 'axios';

const api_news = axios.create({
  baseURL: ' https://yourpet-api.onrender.com/',
});

const getAllNews = async () => {
  const data = await api_news.get(`api/news`);

  return data;
};

export default getAllNews;
