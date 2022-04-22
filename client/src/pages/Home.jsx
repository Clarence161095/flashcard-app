import { Tooltip } from 'antd';
import HomeAPI from 'api/HomeApi';
import DoughnutChart from 'components/DoughnutChart';
import Loading from 'components/Loading';
import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addImg from '../assets/add.png';
import settingImg from '../assets/setting.png';

const Home = () => {
  const focusRef = useRef(null);
  const [keySearch, setKeySearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [listSets, setListSets] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    HomeAPI.getListSets().then((data) => {
      setListSets(data.data);
      setLoading(false);
    });
  }, []);

  const handleSearch = _.debounce((value) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(true);
      HomeAPI.getListSets(value).then((data) => {
        setListSets(data);
        setLoading(false);
      });
      focusRef.current.blur();
    }, 500);
  }, 500);

  return (
    <div className="homeCmp">
      {loading && <Loading />}

      <div className="homeCmp_control">
        <img
          src={addImg}
          alt="Create a set"
          onClick={() => {
            navigate('creat_set');
          }}
          title="Create a set"
        />
        <input
          placeholder="Search..."
          value={keySearch}
          onChange={(e) => {
            setKeySearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e.target.value);
            }
          }}
          ref={focusRef}
        />
        <img
          src={settingImg}
          alt="User management"
          onClick={() => {
            navigate('creat_folder');
          }}
          title="User management"
        />
      </div>

      <div className="homeCmp_listItems">
        {listSets.map((set, index) => {
          return (
            <div key={set.id}>
              <Tooltip placement="bottom" title={set.description}>
                <div className="homeCmp_listItems_item">
                  <p>
                    {index + 1}. {set.name}
                  </p>
                  <div className="homeCmp_listItems_item_process">
                    <DoughnutChart
                      process={[
                        set.cards.reduce((prev, next) => {
                          return prev + (next.process < 8 ? 1 : 0);
                        }, 0),
                        set.cards.reduce((prev, next) => {
                          return (
                            prev + (next.process >= 8 && next.process < 13 ? 1 : 0)
                          );
                        }, 0),
                        set.cards.reduce((prev, next) => {
                          return (
                            prev + (next.process >= 13 && next.process < 21 ? 1 : 0)
                          );
                        }, 0),
                        set.cards.reduce((prev, next) => {
                          return prev + (next.process >= 21 ? 1 : 0);
                        }, 0),
                      ]}
                    />
                    <div className="homeCmp_listItems_item_process_total">
                      {set.cards.reduce((prev, next) => {
                        return prev + 1;
                      }, 0) !== 0
                        ? set.cards.reduce((prev, next) => {
                            return prev + 1;
                          }, 0)
                        : ''}
                    </div>
                  </div>
                </div>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
