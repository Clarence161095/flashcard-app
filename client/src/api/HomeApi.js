import AxiosClient from './AxiosClient';

const HomeAPI = {
  getListSets: async (params) => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/sets?_embed=cards`;
    return await AxiosClient.get(url, { ...params });
  },
};

export default HomeAPI;
