// 从 react 中导入 useState
import { useState } from 'react';
// 导入自定义的 useTodoContext Hook
import { useTodoContext } from '../hooks/useTodoContext';

/**
 * AddTodo 组件，用于添加待办事项
 * @returns {JSX.Element} 包含输入框和提交按钮的表单
 */
const AddTodo = () => {
    // 使用 useState 管理输入框的文本状态
    const [text, setText] = useState('');
    // 使用 useTodoContext 获取添加待办事项的函数
    const { addTodo } = useTodoContext();

    /**
     * 处理表单提交事件
     * @param {React.FormEvent<HTMLFormElement>} e - 表单提交事件对象
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedText = text.trim();
        // 检查输入文本是否为空
        if (trimmedText) {
            try {
                // 调用 addTodo 函数添加待办事项
                await addTodo(trimmedText);
                // 清空输入框
                setText("");
            } catch (error) {
                console.error('添加待办事项失败:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)}
                placeholder="输入待办事项"
            />
            <button type="submit">添加</button>
        </form>
    );
};

export default AddTodo;