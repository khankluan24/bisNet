import * as httpRequest from '~/utils/httpRequest';
const get = async (q) => {
  try {
    const res = await httpRequest.get('api/search', {
      params: {
        q,
      },
    });
    return res.data;
    
  } catch (error) {
  }
};

export { get };