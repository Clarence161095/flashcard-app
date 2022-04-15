// import AxiosClient from './AxiosClient';

const HomeAPI = {
  getListFolders: async (params) => {
    if (params) {
      return listFolders.filter((folder) => folder.name.indexOf(params) > -1);
    }
    return listFolders;
    // const url = '/home/getListFolder';
    // return await AxiosClient.post(url, { ...params });
  },
  getListSets: async (params) => {
    if (params) {
      return listSets.filter((folder) => folder.name.indexOf(params) > -1);
    }
    return listSets;
  },
};

export default HomeAPI;

const listFolders = [
  {
    id: 1,
    name: 'Folder chuyên ngành 1',
    description: 'Folder chuyên ngành 1',
    process: [10, 20, 30, 40],
  },
  {
    id: 2,
    name: 'Folder chuyên ngành 2',
    description: 'Folder chuyên ngành 2',
    process: [20, 30, 40, 50],
  },
  {
    id: 3,
    name: 'Folder chuyên ngành 3',
    description: 'Folder chuyên ngành 3',
    process: [50, 40, 30, 10],
  },
];

const listSets = [
  {
    id: 1,
    name: 'Set chuyên ngành 1',
    description: 'Set chuyên ngành 1',
    process: [10, 20, 30, 40],
  },
  {
    id: 2,
    name: 'Set chuyên ngành 2',
    description: 'Set chuyên ngành 2',
    process: [20, 30, 40, 50],
  },
  {
    id: 3,
    name: 'Set chuyên ngành 3',
    description: 'Set chuyên ngành 3',
    process: [50, 40, 30, 10],
  },
];
