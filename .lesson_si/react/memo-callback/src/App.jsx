import { 
  useState,
  useEffect,
  useCallback
 } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [Num, setNum] = useState(0)
    useEffect(() => {
      setNum(count)
    }, [Num])
    // rerender 重新生成
    //

    const handleClick = useCallback(() => {
      console.log('handleClick');
    }, [Num])

  return (
    <>
     
    </>
  )
}

export default App
