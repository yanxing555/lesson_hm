import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim()) {
            onAddTodo(title);
            setTitle(''); // 清空输入框
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    value={title} 
                    onChange={handleChange} // 使用正确的事件处理属性名
                    placeholder="请输入新的待办事项"
                />
                <button type="submit">添加</button>
            </div>
        </form>
    );
};

export default TodoForm;