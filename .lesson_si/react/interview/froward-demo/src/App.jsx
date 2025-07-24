import {  
  useRef,
  useEffect
} from 'react'

import './App.css'

function Guang(props) {
  // 父组件 ref
  const ref = useRef(props);
  console.log(props);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="App">
      {/* <input ref={ref} /> */}
      <Guang ref={ref} />
    </div>
  )
}

export default Guang