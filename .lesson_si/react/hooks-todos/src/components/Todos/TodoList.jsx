import TodoItem from './TodoItem';

const TodoList = (props) => {
  const {
    todos,
    onToggle,
    onDelete
  } =props
  return (
    <ul className="todo-list">
      {/* TodoList */}
      {props.todos.length > 0 ? (
        props.todos.map((todo) => (
          <TodoItem key={todo.id} 
          todo={todo}
          onToggle={()=> onToggle(todo.id)}
          onDelete={()=> onDelete(todo.id)}
          />
        ))
      ) : (
        <p>暂无代办事项</p>
      )}
    </ul>
  );
};

export default TodoList;