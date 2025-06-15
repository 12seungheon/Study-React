import React from "react";
import "./TodoItem.css";
import { useContext } from "react";
import { TodoContext } from "../App";
import { TodoDispatchContext } from "../App";
function TodoItem({ id, content, isDone, createdDate }) {
  // const { onUpdate, onDelete } = useContext(TodoContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
