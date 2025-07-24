import{
    useContext
}from 'react'
import{TodoContext}from '../TodoContext.js'
export function useTodoContext(){
    return useContext(TodoContext)
}