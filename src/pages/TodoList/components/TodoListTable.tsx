import { Table, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './table.scss';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

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
const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    render(value: string) {
      return (<span>{value}</span>);
    },
  },
  {
    title: 'Age',
    key: 'nage',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render(value: string[]) {
      return value.map((item) => {
        let color = item.length > 5 ? 'geekblue' : 'green';
        if (item === 'loser') {
          color = 'volcano';
        }
        return (<Tag key={item} color={color}>{item.toUpperCase()}</Tag>);
      });
    },
  },
  {
    title: 'Action',
    key: 'action`',
    render(value, { name }: DataType) {
      return (
        <Space>
          <span>{`Invite ${name}`}</span>
          <span>Delete</span>
        </Space>
      );
    },
  },
];

function TodoListTable() {
  return (
    <Table dataSource={data} columns={columns} />
  );
}

export default TodoListTable;
