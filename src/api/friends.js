import axios from 'axios';

const apiFr = axios.create({
  baseURL: ' https://yourpet-api.onrender.com/',
});

const getAllFriends = async () => {
  const { data } = await apiFr.get(`api/friends`);

  return data;
};

export default getAllFriends;
