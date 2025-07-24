# 路由

history
hash

- 传统页面开发
    重要的用户体验缺失
     - 需要去到后端拿到新的html,重新渲染
       白屏
  - a 链接切换页面
  - 相比react-router-dom 局部热更新
  前端路由 去负责

- 新的react-router-dom SPA 单页应用
    只有一个页面 但能带来多页面效果

## 基于SPA
- url 可以改变,但不会向后端发送请求 前端路由
    - hash + hashChange 事件 + DOM
    - history.pushState/popState 
- 前端路由react-router-dom 配置 页面级别组件
    热更新 Route
    Outlet
- 单页应用
    只有一个页面 但可以有多个url 路由状态
    页面级别组件
    window.location window.history
    栈
    State 

- history
    很早就有,在浏览器历史记录里游走
    - html5 赋予history 新的功能
    - hash + hashchange 有有点,但是有很大的缺点
       兼容性好
       缺点 http://127.0.0.1:63743/3.html#home
       hash 不好理解
       不这样, 传统后端路由一样
       http://127.0.0.1:63743/首页
       http://127.0.0.1:63743/about关于
    - 怎么样像后端路由一样,不刷新页面？
      html 升级了history api 来实现之
