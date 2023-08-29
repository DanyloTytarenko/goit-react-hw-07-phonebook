import axios from 'axios';

axios.defaults.baseURL = 'https://64c8fe20b2980cec85c1b508.mockapi.io/';

export const fetchAll = async () => {
  const { data } = await axios.get(`contacts`);
  return data;
};

export const addContact = async body => {
  const { data } = await axios.post(`contacts`, body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};
