/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Input } from 'antd';
import TodoListTable from './components/TodoListTable';
import './index.scss';

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const { Search } = Input;

function TodoListComponent() {
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const readOnlyData: DataType[] = JSON.parse(JSON.stringify(data));
  const [datalist, setDatalist] = useState(data);
  const onSearch = (val: string) => {
    if (val === '') {
      return setDatalist(readOnlyData);
    }
    const reg = new RegExp(val, 'ig');
    const filterData = readOnlyData.filter((item) => reg.test(item.name));
    return setDatalist(filterData);
  };
  return (
    <div className="todo-list">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <TodoListTable data={datalist} />
    </div>
  );
}

export default TodoListComponent;
