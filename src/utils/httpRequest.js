import axios from 'axios';
import * as Config from '~/constants/Config';

export const callApi = (endpoint, method = 'get', body) => {
  return axios({
    method,
    url: `${Config.API_URL}/${endpoint}`,
    data: body,
  })
    .then((res) => res.data)
    .catch((error) => console.error(error));
};
