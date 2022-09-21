import * as request from '~/utils/httpRequest';
const get = async (q) => {
  try {
    const res = await request.get('https://api-gateway.fullstack.edu.vn/api/search?', {
      params: {
        q,
      },
    });
    return res.data;
    
  } catch (error) {
    console.error(error.message)


  }
};

export { get };