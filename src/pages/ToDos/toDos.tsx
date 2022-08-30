/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import todos from './style/todo.module.scss';
import useStore from '../../store';

function ToDos() {
  const { todo } = useStore();
  return (
    <section className={todos.todoapp}>
      <header className={todos.header}>
        <h1>todos</h1>
        <input
          className={todos['new-todo']}
          autoComplete="off"
          placeholder="What needs to be done?"
        />
      </header>
      <section className={todos.main}>
        <input
          id="toggle-all"
          className={todos['toggle-all']}
          type="checkbox"
        />
        <label htmlFor="toggle-all" />
        <ul className={todos['todo-list']}>
          {
            todo.dataList.map((item) => (
              <li
                className={todos.todo}
                key={item.id}
              >
                <div className={todos.view}>
                  <input className={todos.toggle} type="checkbox" />
                  <label>{item.title}</label>
                  <button className={todos.destroy} type="button" />
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default ToDos;
