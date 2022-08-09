import { Table, Tag, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from '../index';
import './table.scss';

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

function TodoListTable(props: { data: DataType[] }) {
  const { data } = props;
  return (
    <Table dataSource={data} columns={columns} />
  );
}

export default TodoListTable;
