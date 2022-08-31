/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { observer } from 'mobx-react-lite';
import { KeyboardEvent } from 'react';
import todos from './style/todo.module.scss';
import useStore from '../../store';

function ToDos() {
  const { todo } = useStore();
  const handleCheck = (id: string, status: boolean) => {
    todo.changeItemStatus(id, !status);
  };
  const handleCheckAll = () => {
    todo.changeStatus(!todo.isCheckAll);
  };
  const handleDelItem = (index: number) => {
    todo.delItem(index);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      todo.addItem((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = '';
    }
  };
  return (
    <section className={todos.todoapp}>
      <header className={todos.header}>
        <h1>todos</h1>
        <input
          className={todos['new-todo']}
          autoComplete="off"
          placeholder="What needs to be done?"
          onKeyDown={handleKeyDown}
        />
      </header>
      <section className={todos.main}>
        <input
          id="toggle-all"
          className={todos['toggle-all']}
          type="checkbox"
          checked={todo.isCheckAll}
          onChange={handleCheckAll}
        />
        <label htmlFor="toggle-all" />
        <ul className={todos['todo-list']}>
          {
            todo.dataList.map((item, index) => (
              <li
                key={item.id}
              >
                <div className={todos.view}>
                  <input
                    className={todos.toggle}
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheck(item.id, item.completed)}
                  />
                  <label>{item.title}</label>
                  <button
                    className={todos.destroy}
                    type="button"
                    onClick={() => handleDelItem(index)}
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </section>
      <footer className={todos.footer}>
        <span className={todos['todo-count']}>
          任务总数:
          {todo.dataList.length}
          &nbsp;
          已完成:
          {todo.checkList.length}
        </span>
      </footer>
    </section>
  );
}

export default observer(ToDos);
