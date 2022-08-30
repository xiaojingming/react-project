import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addCount() {
    this.count += 1;
  }
}

const counter = new CounterStore();
export default counter;
