import { useState } from 'react'
import './App.css'
import LifecycleDemo from './components/LifecycleDemo'
import {
  useToggle,
  useRequest // 必用的请求hooks
} from 'ahooks'
function GetUsername() {
  const [state, { toggle, setLeft, setRight }] = useToggle();
  const {data,error,loading}=useRequest(getUsername);
  return (
    <>
      <p>Effects:{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: '0 8px' }}>
          Toggle False
        </button>
        <button type="button" onClick={setRight}>
          Toggle True
        </button>
      </p>
      <LifecycleDemo/>
    </>
  )
}

export default App