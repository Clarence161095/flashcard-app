import { Input, Tooltip } from 'antd';
import HomeAPI from 'api/HomeApi';
import DoughnutChart from 'components/DoughnutChart';
import Loading from 'components/Loading';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addImg from '../assets/add.png';

export const FolderItem = (props) => {
  return (
    <Tooltip placement="bottom" title={props.info.description}>
      <div className="homeCmp-listItems-item">
        <p>{props.info.name}</p>
        <div className="homeCmp-listItems-item-process">
          <DoughnutChart process={props.info.process} />
          <div className="homeCmp-listItems-item-process-total">
            {props.info.process.reduce((prev, next) => {
              return prev + next;
            }, 0)}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

const Home = () => {
  const styles = {
    chooseMenu: {
      backgroundColor: 'rgba(108, 92, 231, 1)',
      cursor: 'pointer',
      boxShadow: '0px 0px 7px rgba(223, 230, 233, 0.5)',
    },
  };

  const focusRef = useRef(null);
  const [menu, setMenu] = useState('folders');
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [keySearch, setKeySearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [listFolders, setListFolders] = useState([]);
  const [listSets, setListSets] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    switch (menu) {
      case 'folders':
        setLoading(true);
        HomeAPI.getListFolders().then((data) => {
          setListFolders(data);
          setLoading(false);
        });
        break;
      case 'sets':
        setLoading(true);
        HomeAPI.getListSets().then((data) => {
          setListSets(data);
          setLoading(false);
        });
        break;
      default:
        setLoading(false);
        break;
    }
  }, [menu]);

  const handleSearch = _.debounce((value) => {
    setLoadingSearch(true);
    setLoading(true);
    setTimeout(() => {
      setLoadingSearch(false);
      switch (menu) {
        case 'folders':
          HomeAPI.getListFolders(value).then((data) => {
            setListFolders(data);
            setLoading(false);
          });
          break;
        case 'sets':
          setLoading(true);
          HomeAPI.getListSets(value).then((data) => {
            setListSets(data);
            setLoading(false);
          });
          break;
        default:
          setLoading(false);
          break;
      }
      focusRef.current.blur();
    }, 500);
  }, 500);

  return (
    <div className="homeCmp">
      {loading && <Loading />}
      <div className="homeCmp-control">
        {['folders', 'sets', 'user'].map((item) => {
          return (
            <button
              key={item}
              style={menu === item ? styles.chooseMenu : {}}
              onClick={() => {
                setMenu(item);
                setKeySearch('');
              }}
            >
              {_.startCase(_.toLower(item))}
            </button>
          );
        })}
      </div>

      {(menu === 'folders' || menu === 'sets') && (
        <>
          <Input.Search
            placeholder={`
          ${
            menu === 'folders' ? 'Folders' : menu === 'sets' ? 'Sets' : ''
          } search text
          `}
            value={keySearch}
            enterButton="Search"
            size="large"
            loading={loadingSearch}
            onChange={(e) => {
              setKeySearch(e.target.value);
            }}
            onPressEnter={(e) => {
              handleSearch(e.target.value);
            }}
            onSearch={(value) => {
              handleSearch(value);
            }}
            ref={focusRef}
          />

          <div
            className="homeCmp-create"
            onClick={() => {
              navigate('creat_folder');
            }}
          >
            <img src={addImg} alt="Create Folder" />
            <div>
              Create a new{' '}
              {menu === 'folders' ? 'folder' : menu === 'sets' ? 'set' : ''}
            </div>
            <img src={addImg} alt="Create Folder" />
          </div>
        </>
      )}

      <div className="homeCmp-listItems">
        {menu === 'folders' &&
          listFolders.map((info) => {
            return (
              <div key={info.id}>
                <FolderItem info={info} />
              </div>
            );
          })}
        {menu === 'sets' &&
          listSets.map((info) => {
            return (
              <div key={info.id}>
                <FolderItem info={info} key={info} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
