import axios from 'axios';

const Axios = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  Axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        (error.response && error.response.status === 401) ||
        (error.response && error.response.status === 403) ||
        (error.response && error.response.data.message === 'REFURBSTOCK_ERROR.NOT_AUTHORIZED')
      )
      return Promise.reject(error);
    }
  );
export default Axios;
