import axios from 'axios';

export const getNoticesByCategory = async ({ category, search, page }) => {
  const { data } = await axios.get(`api/notices/${category}`, {
    params : { search, page, perpage : 12 },
  })
  return data;
  };

export const addNoticesFavorite = async (id ) => {
  await axios.post(`api/notices/favorite/${id}`);
}

export const removeNoticesFavorite = async (id ) => {
  await axios.delete(`api/notices/favorite/${id}`);
}

export const deleteNotices = async (id) => {
  await axios.delete(`api/notices/${id}`);
}
