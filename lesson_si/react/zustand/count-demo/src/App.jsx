import { useState } from 'react'
import './App.css'
import Couter from './components/Counter/index.jsx'
import { useCounterStore } from './store/count.js'
import TodoList from './components/TodoList/index.jsx'
import RepoList from './components/RepoList/index.jsx'

function App() {
 

  return (
    <>
    <Couter/>
    <TodoList/>
    <RepoList/>
    </>
  )
}

export default App
