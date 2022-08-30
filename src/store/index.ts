import { useContext, createContext } from 'react';
import counter from './modules/counterStore';
import list from './modules/listStore';
import todos from './modules/todoStore';

class RootStore {
  counter: typeof counter;

  list: typeof list;

  todo: typeof todos;

  constructor() {
    this.counter = counter;
    this.list = list;
    this.todo = todos;
  }
}

const rootStore = new RootStore();
const context = createContext(rootStore);
const useStore = () => useContext(context);

export default useStore;
