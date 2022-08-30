import todos from './style/todo.module.scss';

function ToDos() {
  return (
    <section className={todos.todoapp}>
      <header className={todos.header}>
        <h1>todos</h1>
        <input
          className={todos['new-todo']}
          autoFocus
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
        <label htmlFor="toggle-all"></label>
        <ul className={todos['todo-list']}>
          <li
            className={todos.todo}
          >
            <div className={todos.view}>
              <input className={todos.toggle} type="checkbox" />
              <label >learn react</label>
              <button className={todos.destroy}></button>
            </div>
          </li>
          <li
            className="todo completed"
          >
            <div className={todos.view}>
              <input className={todos.toggle} type="checkbox" defaultChecked={true}/>
              <label>learn react</label>
              <button className={todos.destroy}></button>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ToDos;
