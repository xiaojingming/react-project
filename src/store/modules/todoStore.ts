import { makeAutoObservable } from 'mobx';
import uuid from 'react-uuid';

interface List {
  id: string;
  title: string;
}

class TodoStore {
  dataList: List[] = [
    {
      id: uuid(),
      title: 'JS深入系列',
    },
    {
      id: uuid(),
      title: 'JS专题系列',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export default new TodoStore();
