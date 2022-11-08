/* eslint-disable no-unused-vars */
interface CommentProps {
  value: string,
  handleChangeValue(val: string): void,
  handleEnterSearch(key: string): void,
  handleSearch(): void,
}

function BasicComment(props: CommentProps) {
  const {
    value, handleChangeValue, handleEnterSearch, handleSearch,
  } = props;
  return (
    <div className="add-comment">
      <img src="../../../asserts/comment/lbxx.png" alt="" />
      <input
        type="text"
        placeholder="请输入一条评论"
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        onKeyDown={(e) => handleEnterSearch(e.key)}
      />
      <div
        className="add-comment-btn"
        onClick={handleSearch}
      >
        发布
      </div>
    </div>
  );
}

export default BasicComment;
