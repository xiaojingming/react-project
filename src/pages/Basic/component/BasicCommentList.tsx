/* eslint-disable no-unused-vars */
import { List } from '../basic2';

interface CommentListProps {
  lists: List[],
  handleToggleStatus(
    i: number,
    key: 'good' | 'bad',
    reverse?: 'bad' | 'good'
  ): void,
}

function BasicCommentList(props: CommentListProps) {
  const { lists, handleToggleStatus } = props;
  return (
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
                <span className="comment-options-count">
                  浏览数--
                  {list.viewingCount}
                </span>
                <div
                  className="comment-options-good"
                  onClick={() => handleToggleStatus(index, 'good')}
                >
                  <i
                    className={`iconfont icon-icon ${list.goodStatus ? 'active' : ''}`}
                  />
                  <span
                    style={{ display: list.good > 0 ? 'block' : 'none' }}
                  >
                    {list.good}
                  </span>
                </div>
                <div
                  className="comment-options-bad"
                  onClick={() => handleToggleStatus(index, 'bad')}
                >
                  <i
                    className={`iconfont icon-tubiao_diancai ${list.badStatus ? 'active' : ''}`}
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
  );
}

export default BasicCommentList;
