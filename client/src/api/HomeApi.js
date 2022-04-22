import AxiosClient from './AxiosClient';

const HomeAPI = {
  getListSets: async (params) => {
    const url = `${process.env.REACT_APP_BACKEND_HOST}/sets?_embed=cards`;
    return await AxiosClient.get(url, { ...params });
  },
};

export default HomeAPI;

// const listFolders = [
//   {
//     id: 1,
//     name: 'Folder chuyên ngành 1',
//     description: 'Folder chuyên ngành 1',
//     process: [10, 20, 30, 40],
//   },
//   {
//     id: 2,
//     name: 'Folder chuyên ngành 2',
//     description: 'Folder chuyên ngành 2',
//     process: [20, 30, 40, 50],
//   },
//   {
//     id: 3,
//     name: 'Folder chuyên ngành 3',
//     description: 'Folder chuyên ngành 3',
//     process: [50, 40, 30, 10],
//   },
// ];

// const listSets = [
//   {
//     id: 1,
//     name: 'Set chuyên ngành 1',
//     description: 'Set chuyên ngành 1',
//     process: [10, 20, 30, 40],
//   },
//   {
//     id: 2,
//     name: 'Set chuyên ngành 2',
//     description: 'Set chuyên ngành 2',
//     process: [20, 30, 40, 50],
//   },
//   {
//     id: 3,
//     name: 'Set chuyên ngành 3',
//     description: 'Set chuyên ngành 3',
//     process: [50, 40, 30, 10],
//   },
// ];
