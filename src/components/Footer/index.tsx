import {
  BaseSyntheticEvent, useState,
} from 'react';
import './index.scss';

function Footer() {
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
  const handleClick = (e: BaseSyntheticEvent, index: number) => {
    console.log('p', index, e);
    setActiveIndex(index);
  };
  const handleClickOnName = (e: BaseSyntheticEvent) => {
    console.log('click', e);
  };
  return (
    <footer>
      <ul>
        {
          lists.map((list, index) => (
            <li
              key={list.id}
              className={index === activeIndex ? 'active' : ''}
              onClick={(e) => handleClick(e, index)}
            >
              <i className={iconStyle(list.icon)} />
              <span onClick={handleClickOnName}>{ list.name }</span>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}

export default Footer;
