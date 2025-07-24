import {
    useTodoContext
}from '../hooks/useTodoContext'
const TodoList =()=>{
    const {todos,
        toggletodo,
        removeTodo
        }= useTodoContext();
    return (
        <ul>
            {
                todos.map(todo=>(
                    <li key={todo.id}>
                        <span
                            onClick={()=> toggletodo(todo.id)}
                            style={{textDecoration:todo.done?'line-through':'none'}}
                            >{todo.text}        
                            </span>
                            <button onClick={()=>removeTodo(todo.id)}>remove</button>
                        </li>
                ))
            }  
        </ul>
    )
}
export default TodoList