import axios from 'axios';

export const getPets = async () => {
  const data = await axios.get(`api/pets`);

  return data;
};

export const deletePets = async id => {
  const data = await axios.delete(`api/pets/${id}`);

  return data;
};
