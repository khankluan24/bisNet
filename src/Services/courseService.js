import * as request from '~/utils/httpRequest';

const coursesApi ='https://reactjs-f8-default-rtdb.asia-southeast1.firebasedatabase.app/.json'

const get = async() => {
  try {
    const res = await request.get(coursesApi);
    return res.data;
    
  } catch (error) {
    console.error(error.message)
  }
};
export { get };
