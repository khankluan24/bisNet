import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

//Tạo phương thức get
export const get = async (url, params = {}) => {
  const response = await axios.get(url, params);
  return response.data;
};

