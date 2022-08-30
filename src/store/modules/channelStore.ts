import { makeAutoObservable } from 'mobx';

interface Channels {
  id: number;
  name: string;
}

class ChannelStore {
  channelList: Channels[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchData() {
    const val = await fetch('http://geek.itheima.net/v1_0/channels', {
      method: 'GET',
    });
    const { data } = await val.json();
    this.channelList = data.channels;
  }
}

const channelStore = new ChannelStore();

export default channelStore;
