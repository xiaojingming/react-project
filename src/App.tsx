import { useState } from 'react';
import './App.scss';
import TestComponent from './pages/Test/index';

function App() {
  const lists = [
    {
      id: 1,
      name: '首页',
      icon: 'shouye',
    },
    {
      id: 2,
      name: '商品',
      icon: 'shangpin',
    },
    {
      id: 3,
      name: '应用',
      icon: 'yingyong',
    },
    {
      id: 4,
      name: '我的',
      icon: 'wode',
    },
  ];
  const iconStyle = (className: string) => `iconfont icon-${className}`;
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <TestComponent />
      <footer>
        <ul>
          {
          lists.map((list, index) => (
            <li
              key={list.id}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => handleClick(index)}
            >
              <i className={iconStyle(list.icon)} />
              <span>{ list.name }</span>
            </li>
          ))
        }
        </ul>
      </footer>
    </>
  );
}

export default App;
