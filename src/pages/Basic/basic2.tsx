/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import '@/pages/Comment/index.scss';

function Basic2() {
  interface List {
    id: number,
    author: string,
    comment: string,
    date: string,
    good: number,
    goodStatus: boolean,
    bad: number,
    badStatus: boolean,
    viewingCount: number,
  }

  const [lists, changeLists] = useState([
    {
      id: 0,
      author: 'xiao',
      comment: 'this is comment 1',
      date: '2022-06-28',
      good: 1,
      goodStatus: false,
      bad: 0,
      badStatus: false,
      viewingCount: 100,
    },
    {
      id: 1,
      author: 'xiaojing',
      comment: 'this is comment 1',
      date: '2022-06-29',
      good: 0,
      goodStatus: false,
      bad: 3,
      badStatus: false,
      viewingCount: 80,
    },
    {
      id: 2,
      author: 'xiaojingming',
      comment: 'this is comment 3',
      date: '2022-06-30',
      good: 10,
      goodStatus: false,
      bad: 0,
      badStatus: false,
      viewingCount: 60,
    },
  ]);
  const [value, changeValue] = useState('');
  const [activeIndex, changeActiveIndex] = useState(0);

  const handleChangeActiveIndex = (idx: number) => {
    changeActiveIndex(idx);
    if (idx === 0) {
      changeLists(lists.sort((a, b) => (a.viewingCount > b.viewingCount ? -1 : 1)));
    } else {
      changeLists(lists.sort((a, b) => (Number(new Date(a.date))
        > Number(new Date(b.date)) ? -1 : 1)));
    }
  };
  const handleChangeValue = (v: string) => changeValue(v);
  const handleSearch = () => {
    const params: List = {
      id: lists.length,
      author: 'xiao',
      comment: value,
      date: '2022-11-04',
      good: 0,
      goodStatus: false,
      bad: 0,
      badStatus: false,
      viewingCount: 0,
    };
    changeLists([...lists, params]);
    changeValue('');
  };
  const handleEnterSearch = (k: string) => k === 'Enter' && handleSearch();
  const handleToggleStatus = (
    i: number,
    key: 'good' | 'bad',
    reverse: 'bad' | 'good' = key === 'bad' ? 'good' : 'bad',
  ) => {
    const changeList = lists.map((item, index) => {
      if (index === i) {
        item[`${key}Status`] = !item[`${key}Status`];
        item[key] += item[`${key}Status`] ? 1 : -1;
        if (item[`${key}Status`] && item[`${reverse}Status`]) {
          item[`${reverse}Status`] = false;
          item[`${reverse}`] -= 1;
        }
      }
      return item;
    });
    changeLists(changeList);
  };

  return (
    <div className="comment">
      <div className="header">
        <span
          className={activeIndex === 0 ? 'active' : 'disActive'}
          onClick={() => handleChangeActiveIndex(0)}
        >
          最热
        </span>
        <span>|</span>
        <span
          className={activeIndex === 1 ? 'active' : 'disActive'}
          onClick={() => handleChangeActiveIndex(1)}
        >
          最新
        </span>
      </div>
      <div className="add-comment">
        <img src="../../../asserts/comment/lbxx.png" alt="" />
        <input
          type="text"
          placeholder="请输入一条评论"
          value={value}
          onChange={(e) => handleChangeValue(e.target.value)}
          onKeyDown={(e) => handleEnterSearch(e.key)}
        />
        <div
          className="add-comment-btn"
          onClick={handleSearch}
        >
          发布
        </div>
      </div>
      <ul className="comment-list">
        {
          lists.map((list, index) => (
            <li
              className="comment-list-item"
              key={list.id}
            >
              <div className="item-left">
                <img src="../../../asserts/comment/lbxx.png" alt="" />
              </div>
              <div className="item-right">
                <span className="item-author">{list.author}</span>
                <p className="item-comment">{list.comment}</p>
                <div className="comment-options">
                  <span className="comment-options-time">{list.date}</span>
                  <span className="comment-options-count">
                    浏览数--
                    {list.viewingCount}
                  </span>
                  <div
                    className="comment-options-good"
                    onClick={() => handleToggleStatus(index, 'good')}
                  >
                    <i
                      className={`iconfont icon-icon ${list.goodStatus ? 'active' : ''}`}
                    />
                    <span
                      style={{ display: list.good > 0 ? 'block' : 'none' }}
                    >
                      {list.good}
                    </span>
                  </div>
                  <div
                    className="comment-options-bad"
                    onClick={() => handleToggleStatus(index, 'bad')}
                  >
                    <i
                      className={`iconfont icon-tubiao_diancai ${list.badStatus ? 'active' : ''}`}
                    />
                    <span
                      style={{ display: list.bad > 0 ? 'block' : 'none' }}
                    >
                      {list.bad}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Basic2;
