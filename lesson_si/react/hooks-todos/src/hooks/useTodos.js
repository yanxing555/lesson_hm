import {
    useState,
    useEffect
} from 'react'

export const useTodos = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    )
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    // 新增todo 
    const addTodo = (text) => {
        // setTodo
        // 数据状态时对象的时候
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false
            }

        ])
    }
    const onToggle = (id) => {
        // todos 数组 找到id 为id， isComplete !ixCompelte
        // 响应式？ 返回一个全新的todos map 
        setTodos(todos.map(
            todo => todo.id === id ? {
                ...todo, isComplete: !todo.isComplete
            } : todo

        ))
    }
    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id)) // filter 过滤器
    }

    return {
        todos,
        setTodos,
        addTodo,
        onToggle,
        onDelete
    }
}

