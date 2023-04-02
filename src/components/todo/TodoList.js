import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { clearTodo } from "../../redux/actions/todoAction";

const TodoList = () => {
  const dispatch = useDispatch();
  const handleClearList = () => {
    dispatch(clearTodo());
  };
  const todo = useSelector((state) => state.todo.todoList);
  return (
    <div>
      <div>
        {todo.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
