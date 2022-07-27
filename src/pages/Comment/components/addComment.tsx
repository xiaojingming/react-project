/* eslint-disable no-unused-vars */
import { BaseSyntheticEvent } from 'react';

interface AddCommentProps {
  value: string;
  handleChangeInput: (e: BaseSyntheticEvent) => void;
  handleSubmit: () => void;
}

function AddComment(props: AddCommentProps) {
  const { value, handleChangeInput, handleSubmit } = props;
  return (
    <div className="add-comment">
      <img src="../../../asserts/comment/lbxx.png" alt="" />
      <input
        type="text"
        placeholder="请输入一条评论"
        value={value}
        onChange={handleChangeInput}
      />
      <div
        className="add-comment-btn"
        onClick={handleSubmit}
      >
        发布
      </div>
    </div>
  );
}

export default AddComment;
