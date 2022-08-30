import { useContext, createContext } from 'react';
import counter from './modules/counterStore';
import list from './modules/listStore';

class RootStore {
  counter: typeof counter;

  list: typeof list;

  constructor() {
    this.counter = counter;
    this.list = list;
  }
}

const rootStore = new RootStore();
const context = createContext(rootStore);
const useStore = () => useContext(context);

export default useStore;
