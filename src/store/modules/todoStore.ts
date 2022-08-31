/* eslint-disable no-param-reassign */
import { makeAutoObservable, computed } from 'mobx';
import uuid from 'react-uuid';

interface List {
  id: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  dataList: List[] = [
    {
      id: uuid(),
      title: 'JS深入系列',
      completed: true,
    },
    {
      id: uuid(),
      title: 'JS专题系列',
      completed: false,
    },
  ];

  constructor() {
    makeAutoObservable(this, {
      checkList: computed,
      isCheckAll: computed,
    });
  }

  get checkList() {
    return this.dataList.filter((item) => item.completed);
  }

  get isCheckAll() {
    return this.checkList.length === this.dataList.length;
  }

  changeItemStatus(id: string, status: boolean) {
    this.dataList.forEach((item) => {
      if (item.id === id) {
        item.completed = status;
      }
    });
  }

  changeStatus(status: boolean) {
    this.dataList.forEach((item) => {
      item.completed = status;
    });
  }

  delItem(index: number) {
    this.dataList.splice(index, 1);
  }

  addItem(title: string) {
    const obj = {
      id: uuid(),
      title,
      completed: false,
    };
    this.dataList.push(obj);
  }
}

export default new TodoStore();
