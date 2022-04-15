/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Tooltip } from 'antd';
import HomeAPI from 'api/HomeApi';
import DoughnutChart from 'components/DoughnutChart';
import { DivHover } from 'components/Hover';
import Loading from 'components/Loading';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addImg from '../assets/add.png';

export const FolderItem = (props) => {
  const hoverStyles = {
    transform: 'scale(0.99)',
  };

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    name: {
      width: '50%',
    },
    process: {
      position: 'relative',
      width: '30%',
      maxWidth: '100px',
      transform: 'translateY(-8px)',
      total: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-4px)',
      },
    },
  };
  return (
    <DivHover hoverStyles={hoverStyles}>
      <Tooltip placement="bottom" title={props.info.description}>
        <div style={styles}>
          <div style={styles.name}>{props.info.name}</div>
          <div style={styles.process}>
            <DoughnutChart process={props.info.process} />
            <div style={styles.process.total}>
              {props.info.process.reduce((prev, next) => {
                return prev + next;
              }, 0)}
            </div>
          </div>
        </div>
      </Tooltip>
    </DivHover>
  );
};

const Home = () => {
  const styles = {
    control: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '10px 0px 15px 0px',
      item: {
        backgroundColor: 'rgba(108, 92, 231,1.0)',
        padding: '10px 20px 10px 20px',
        borderRadius: '5px',
      },
      listItem: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    create: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      img: {
        width: '50px',
      },
      title: {
        fontSize: '1.3rem',
      },
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
    <div style={styles}>
      {loading && <Loading />}
      <div style={styles.control}>
        <DivHover
          onClick={() => {
            setMenu('folders');
            setKeySearch('');
          }}
          isClick={menu === 'folders' ? true : false}
        >
          Folder
        </DivHover>
        <DivHover
          onClick={() => {
            setMenu('sets');
            setKeySearch('');
          }}
          isClick={menu === 'sets' ? true : false}
        >
          Study set
        </DivHover>
        <DivHover
          onClick={() => {
            setMenu('user');
            setKeySearch('');
          }}
          isClick={menu === 'user' ? true : false}
        >
          User
        </DivHover>
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

          <DivHover
            hoverStyles={{ transform: 'scale(0.98)' }}
            defaultStyles={{ backgroundColor: 'rgba(46, 204, 113,0.3)' }}
            onClick={() => {
              navigate('creat_folder');
            }}
          >
            <div style={styles.create}>
              <img style={styles.create.img} src={addImg} alt="Create Folder" />
              <div style={styles.create.title}>
                Create a new{' '}
                {menu === 'folders' ? 'folder' : menu === 'sets' ? 'set' : ''}
              </div>
              <img style={styles.create.img} src={addImg} alt="Create Folder" />{' '}
            </div>
          </DivHover>
        </>
      )}

      <div style={styles.listItem}>
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
