import AxiosClient from './AxiosClient';

const LoginApi = {
  login: async (userName, password) => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/login`;
    return await AxiosClient.post(url, {
      email: `${userName}@gmail.com`,
      password: password,
    });
  },
};

export default LoginApi;
