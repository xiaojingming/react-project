/* eslint-disable react/button-has-type */
import { useState } from 'react';

function Basic1() {
  const datalist = [
    {
      id: 0,
      title: 'val1',
    },
    {
      id: 1,
      title: 'val2',
    },
    {
      id: 2,
      title: 'val3',
    },
  ];
  const [flag, changeFlag] = useState(true);
  return (
    <>
      <div>Basic1</div>
      <ul>
        {
          datalist.map((item, index) => (
            <li key={item.id}>
              { index }
              -
              {item.title}
            </li>
          ))
        }
      </ul>
      <div>
        {
          flag ? <div style={{ color: 'green' }}>ture</div> : <div style={{ color: 'red' }}>false</div>
        }
      </div>
      <button onClick={() => changeFlag(!flag)}>change</button>
    </>
  );
}

export default Basic1;
