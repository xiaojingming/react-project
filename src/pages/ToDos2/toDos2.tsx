/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import todos from '../ToDos/style/todo.module.scss';

function ToDos2() {
  const datalist = [
    {
      id: 0,
      task: 'JS深入系列',
      completed: false,
    },
    {
      id: 1,
      task: 'JS专题系列',
      completed: false,
    },
  ];
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
        {/* <label htmlFor="toggle-all" /> */}
        <ul className={todos['todo-list']}>
          {
            datalist.map((item) => (
              <li
                key={item.id}
              >
                <div className={todos.view}>
                  <input
                    className={todos.toggle}
                    type="checkbox"
                  />
                  <label>{item.task}</label>
                  <button
                    className={todos.destroy}
                    type="button"
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
          {/* {todo.dataList.length} */}
          &nbsp;
          已完成:
          {/* {todo.checkList.length} */}
        </span>
      </footer>
    </section>
  );
}

export default ToDos2;
