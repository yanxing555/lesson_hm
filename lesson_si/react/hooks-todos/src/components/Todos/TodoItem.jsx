const TodoItem = (props)=>{
  const{
    id,
    text,
    isComplete
  } =props.todo
  const { onToggle, onDelete }= props
    return (
  <div className="todo-item">
    <input type="checkbox" checked={isComplete}onChange={onToggle} /> 
    <span className={isComplete? 'completed':''}>
      <button onClick={onDelete}>删除</button>
      {text}
    </span>
  </div>
    )
}
export default TodoItem