import {
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';
import './App.css';

function Modal() {
  const ref = useRef(); 
  const height = 100; // 定义弹窗高度

  useLayoutEffect(() => {
    // 使用 height 计算垂直居中位置
    ref.current.style.marginTop = `${(window.innerHeight - height) / 2}px`;
  }, []); 

  return (
    <div 
      ref={ref} 
      style={{
        position: 'absolute',
        width: '200px',
        height: `${height}px`, // 设置高度
        backgroundColor: 'lightblue', // 可选背景色
        left: '50%',
        transform: 'translateX(-50%)', // 水平居中
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #ccc'
      }}
    >
      我是弹窗
    </div>
  );
}

function App() {
  return (
    <>
      <Modal />
    </>
  );
}

export default App;