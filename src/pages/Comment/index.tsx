/* eslint-disable react/state-in-constructor */
import { Component, ReactNode } from 'react';
import './index.scss';

interface Comment {
  author: string;
  comment: string;
  date: string;
  good: number;
  bad: number;
  id: number;
}

class CommentComponent extends Component {
  state: Readonly<{
    lists: Comment[];
  }> = {
      lists: [
        {
          id: 0,
          author: 'xiao',
          comment: 'this is comment 1',
          date: '2022-06-28',
          good: 1,
          bad: 0,
        },
        {
          id: 1,
          author: 'xiaojing',
          comment: 'this is comment 1',
          date: '2022-06-28',
          good: 1,
          bad: 0,
        },
      ],
    };

  render(): ReactNode {
    const { lists } = this.state;
    return (
      <div className="comment">
        <div className="header">
          <span className="active">最热</span>
          <span>|</span>
          <span>最新</span>
        </div>
        <div className="add-comment">
          <img src="../../../asserts/comment/lbxx.png" alt="" />
          <input type="text" placeholder="请输入一条评论" />
          <div className="add-comment-btn">发布</div>
        </div>
        <ul className="comment-list">
          {
              lists.map((list) => (
                <li className="comment-list-item" key={list.id}>
                  <div className="item-left">
                    <img src="../../../asserts/comment/lbxx.png" alt="" />
                  </div>
                  <div className="item-right">
                    <span className="item-author">{list.author}</span>
                    <p className="item-comment">{list.comment}</p>
                    <div className="comment-options">
                      <span className="comment-options-time">{list.date}</span>
                      <div className="comment-options-good">
                        <i className="iconfont icon-icon" />
                        <span style={{ display: list.good > 0 ? 'block' : 'none' }}>{list.good}</span>
                      </div>
                      <div className="comment-options-bad">
                        <i className="iconfont icon-tubiao_diancai" />
                        <span style={{ display: list.bad > 0 ? 'block' : 'none' }}>{list.bad}</span>
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
