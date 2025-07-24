# useLayoutEffect

- useEffect
  副作用 
  - 当组件渲染完之后  
  - 依赖项更新也会执行
  - 依赖项移除也会执行

- useLayoutEffect
    副作用
    DOM 更新之后
    阻塞页面的渲染
    在页面渲染之前

- 能解决什么问题
  防"闪烁" 用户体验 bug (useState)出现问题
  类似"同步"拿到响应式之后的样式

   