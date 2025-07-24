import { useState } from 'react'
import './APP.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
      {/* 开发的任务单位就是组件 */}
      {/* <div style={{"width":"3.5714rem","height":"3.5714rem","background":"green"}}></div> */}
      <Todos /> 
    </>
  )
}

export default App
