import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useContext, useState, useMemo } from "react";
import { TodoContext } from "../App";
import { TodoStateContext } from "../App";
export default function TodoList() {
  // const { todo } = useContext(TodoContext);
  const storeData = useContext(TodoContext);
  const todo = useContext(TodoStateContext);
  console.log("TodoList 렌더링", storeData);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  TodoList.defaultProps = {
    todo: [],
  };
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;
  return (
    <div className="TodoList">
      <h4>Todo List 🌷</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료: {doneCount}</div>
        <div>미완료: {notDoneCount}</div>
      </div>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}
