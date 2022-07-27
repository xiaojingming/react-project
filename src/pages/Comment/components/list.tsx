/* eslint-disable no-unused-vars */
export interface Comment {
  author: string;
  comment: string;
  date: string;
  good: number;
  goodStatus: boolean;
  bad: number;
  badStatus: boolean;
  id: number;
}

interface listProps {
  lists: Comment[];
  handleStatusChange: (index: number, type: boolean, status: boolean) => void;
}

function List(props: listProps) {
  const { lists, handleStatusChange } = props;
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
                <div className="comment-options-good">
                  <i
                    className={`iconfont icon-icon ${list.goodStatus ? 'active' : ''}`}
                    onClick={() => handleStatusChange(index, true, list.goodStatus)}
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
                    onClick={() => handleStatusChange(index, false, list.badStatus)}
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

export default List;
