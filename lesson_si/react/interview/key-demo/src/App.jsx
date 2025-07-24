import { 
  useState
  ,useEffect
 } from 'react'
import './App.css'

function App() {
    const[todos,setTodos] = useState([
      {
        id:1,
        text:'标题一',
      },
      {
        id:2,
        text:'标题二',
      },
      {
        id:3,
        text:'标题三',
      }
    ]);
    useEffect(()=>{
      setTodos(prev=>prev.map(todo=>{
        if(todo.id===1)return{
          ...todo,
          text:'标题-改一',
        }
      }))
    },[todos])

  return (
    <>

    </>
  )
}

export default App
