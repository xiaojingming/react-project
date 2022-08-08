import { Input } from 'antd';
import TodoListTable from './components/TodoListTable';
import './index.scss';

const { Search } = Input;
const onSearch = (val: string) => {
  console.log(val);
};

function TodoListComponent() {
  return (
    <div className="todo-list">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <TodoListTable />
    </div>
  );
}

export default TodoListComponent;
