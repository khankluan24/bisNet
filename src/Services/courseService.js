import * as httpRequest from '~/utils/httpRequest';

const get = async() => {
  try {
    const res = await httpRequest.get('api/learning-paths'
    );
    return res.data;
    
  } catch (error) {
  }
};
export { get };
