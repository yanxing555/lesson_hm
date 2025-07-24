import { 
    useState, 
    useEffect
} from 'react';
import TodoFrom from './TodoFrom'; // 假设拼写应该是 TodoForm 而不是 TodoFrom
import TodoList from './TodoList';
import { useTodos } from '@/hooks/useTodos'; // 确保此路径正确并且文件存在


const Todos = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [
        {
            id: 1,
            text: '打三角洲',
            isComplete: false
        },
        {
            id: 2,
            text: '打CSGO',
            isComplete: false
        }
    ]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                isComplete: false
            }
        ]);
    };

    const onToggle = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        ));
    };

    const onDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='app'>
            {/* 自定义事件 */}
            <TodoFrom onAddTodo={addTodo} />
            <TodoList todos={todos}
                      onToggle={onToggle}
                      onDelete={onDelete}
            />
        </div>
    );
}

export default Todos;