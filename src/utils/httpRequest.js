import axios from "axios";

const httpRequest = axios.create({
    baseURL: 'http://localhost:3001/',
})
export const get = async (url, params ={}) => {
    const response = await axios.get(url, params)
    return response.data
  };
export default httpRequest