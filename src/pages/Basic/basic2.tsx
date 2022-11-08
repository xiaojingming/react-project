/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-return */
import { useState } from 'react';
import BasicHeader from './component/BasicHeader';
import BasicComment from './component/BasicComment';
import BasicCommentList from './component/BasicCommentList';
import '@/pages/Comment/index.scss';

export interface List {
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

function Basic2() {
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
      <BasicHeader
        activeIndex={activeIndex}
        handleChangeActiveIndex={handleChangeActiveIndex}
      />
      <BasicComment
        value={value}
        handleChangeValue={handleChangeValue}
        handleEnterSearch={handleEnterSearch}
        handleSearch={handleSearch}
      />
      <BasicCommentList
        lists={lists}
        handleToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

export default Basic2;
