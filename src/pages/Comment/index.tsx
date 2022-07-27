/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import { BaseSyntheticEvent, Component, ReactNode } from 'react';
import Tab from './components/tab';
import List, { Comment } from './components/list';
import AddComment from './components/addComment';
import './index.scss';

class CommentComponent extends Component {
  state: Readonly<{
    lists: Comment[];
    showLatest: boolean;
    value: string;
  }> = {
      lists: [
        {
          id: 0,
          author: 'xiao',
          comment: 'this is comment 1',
          date: '2022-06-28',
          good: 1,
          goodStatus: false,
          bad: 0,
          badStatus: false,
        },
        {
          id: 1,
          author: 'xiaojing',
          comment: 'this is comment 1',
          date: '2022-06-29',
          good: 0,
          goodStatus: false,
          bad: 3,
          badStatus: false,
        },
        {
          id: 2,
          author: 'xiaojingming',
          comment: 'this is comment 3',
          date: '2022-06-30',
          good: 10,
          goodStatus: false,
          bad: 0,
          badStatus: false,
        },
      ],
      showLatest: false,
      value: '',
    };

  originList = this.state.lists;

  handleChangeHead = (flag: boolean) => {
    const { lists } = this.state;
    let ls = this.originList;
    if (flag) {
      ls = lists.concat()
        .sort((next, cur) => {
          if (new Date(next.date).getTime() - new Date(cur.date).getTime() > 0) {
            return -1;
          }
          return 1;
        });
    }
    this.setState({
      showLatest: flag,
      lists: ls,
    });
  };

  handleStatusChange = (index: number, type: boolean, status: boolean) => {
    const { lists } = this.state;
    this.setState({
      lists: lists.map((list, idx) => {
        if (idx === index) {
          list[`${type ? 'goodStatus' : 'badStatus'}`] = !status;
          list[`${type ? 'good' : 'bad'}`] += !status ? 1 : -1;
          if (list.badStatus !== false && list.goodStatus !== false) {
            list[`${!type ? 'goodStatus' : 'badStatus'}`] = status;
            list[`${!type ? 'good' : 'bad'}`] += status ? 1 : -1;
          }
        }
        return list;
      }),
    });
  };

  handleChangeInput = (e: BaseSyntheticEvent) => {
    this.setState({
      value: (e.target as HTMLInputElement).value,
    });
  };

  handleSubmit = () => {
    const { lists, value } = this.state;
    const obj = {
      id: lists.length + 1,
      author: 'xiao',
      comment: value,
      date: '2022-07-27',
      good: 0,
      goodStatus: false,
      bad: 0,
      badStatus: false,
    };
    this.setState({
      lists: [...lists, obj],
      value: '',
    });
  };

  render(): ReactNode {
    const { lists, showLatest, value } = this.state;
    return (
      <div className="comment">
        <Tab showLatest={showLatest} handleChangeHead={this.handleChangeHead} />
        <AddComment
          value={value}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <List lists={lists} handleStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}

export default CommentComponent;
