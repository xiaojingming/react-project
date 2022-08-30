import { makeAutoObservable, computed } from 'mobx';

class ListStore {
  list = Array.from({ length: 6 }).map((v, i) => i);

  constructor() {
    makeAutoObservable(this, {
      filterList: computed,
    });
  }

  changeList() {
    this.list.push(this.list.length);
  }

  get filterList() {
    return this.list.filter((item) => item > 5);
  }
}

const list = new ListStore();
export default list;
