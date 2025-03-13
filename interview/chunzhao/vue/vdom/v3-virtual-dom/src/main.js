import {
    createApp,
    h 
  } from 'vue';
  // 虚拟DOM是现代前端框架的核心概念之一，
  // 它是一个轻量级的JavaScript对象，用于描述真实DOM的结构和属性。
  const vnode = h('div', {id: 'app'}, 'Hello Vue3');
  
  createApp({
    render() {
      return vnode;
    }
  }).mount('#app');