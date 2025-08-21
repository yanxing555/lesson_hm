import React from 'react';
import ReactDOM from 'react-dom/client';
import {aMessage} from './a.js';
import Hello from './Hello.jsx';
// 引入css文件
import './main.css';

// 创建根元素
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <div>
        <h1>Webpack Demo</h1>
        <p>{aMessage()}</p>
        <Hello />
    </div>
);
