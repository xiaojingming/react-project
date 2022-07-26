/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import { BaseSyntheticEvent, Component, ReactNode } from 'react';
import './index.scss';

interface Comment {
  author: string;
  comment: string;
  date: string;
  good: number;
  goodStatus: boolean;
  bad: number;
  badStatus: boolean;
  id: number;
}

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
    console.log(this.state.value);
  };

  render(): ReactNode {
    const { lists, showLatest, value } = this.state;
    return (
      <div className="comment">
        <div className="header">
          <span
            className={showLatest ? 'disActive' : 'active'}
            onClick={() => this.handleChangeHead(false)}
          >
            最热
          </span>
          <span>|</span>
          <span
            className={showLatest ? 'active' : 'disActive'}
            onClick={() => this.handleChangeHead(true)}
          >
            最新
          </span>
        </div>
        <div className="add-comment">
          <img src="../../../asserts/comment/lbxx.png" alt="" />
          <input
            type="text"
            placeholder="请输入一条评论"
            value={value}
            onChange={this.handleChangeInput}
          />
          <div
            className="add-comment-btn"
            onClick={this.handleSubmit}
          >
            发布
          </div>
        </div>
        <ul className="comment-list">
          {
            lists.map((list, index) => (
              <li
                className="comment-list-item"
                key={list.id}
              >
                <div className="item-left">
                  <img src="../../../asserts/comment/lbxx.png" alt="" />
                </div>
                <div className="item-right">
                  <span className="item-author">{list.author}</span>
                  <p className="item-comment">{list.comment}</p>
                  <div className="comment-options">
                    <span className="comment-options-time">{list.date}</span>
                    <div className="comment-options-good">
                      <i
                        className={`iconfont icon-icon ${list.goodStatus ? 'active' : ''}`}
                        onClick={() => this.handleStatusChange(index, true, list.goodStatus)}
                      />
                      <span
                        style={{ display: list.good > 0 ? 'block' : 'none' }}
                      >
                        {list.good}
                      </span>
                    </div>
                    <div className="comment-options-bad">
                      <i
                        className={`iconfont icon-tubiao_diancai ${list.badStatus ? 'active' : ''}`}
                        onClick={() => this.handleStatusChange(index, false, list.badStatus)}
                      />
                      <span
                        style={{ display: list.bad > 0 ? 'block' : 'none' }}
                      >
                        {list.bad}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default CommentComponent;
