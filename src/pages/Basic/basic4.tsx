import { useState } from 'react';
import BasicListItem from './component/BasicListItem';

function Basic4() {
  const [list, changeList] = useState([
    {
      id: 1,
      name: '棒棒糖',
      price: 18.8,
      info: '开业大酬宾，全场8折',
    },
    {
      id: 2,
      name: '鸡腿',
      price: 34.2,
      info: '开业大酬宾，全场8折',
    },
    {
      id: 3,
      name: '冰激凌',
      price: 14.2,
      info: '开业大酬宾，全场8折',
    },
  ]);
  const delHandler = (id: number) => {
    changeList(list.filter((li) => li.id !== id));
  };
  return (
    <>
      <div>Basic4</div>
      {
        list.map((li) => <BasicListItem key={li.id} list={li} delHandler={delHandler} />)
      }
    </>
  );
}

export default Basic4;
