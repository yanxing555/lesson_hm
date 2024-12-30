# vue 哲学

- 前端刀耕火种的年代 
  - 开发思想
    底层API DOM编程 + 事件机制
    缺点 复杂
    性能差 (频繁访问，修改DOM)
    v8引擎(JS,单线程) + 渲染引擎(html+css)
    以快速显示页面为第一要务 html + css 渲染引擎 独立于JS引擎
    v8 引擎 独立的  V8 渠道 渲染引擎，犹如上了高速，较远

    vue(登记) 批量收集DOM更新，减少没必要的跑路

- jquery
  js 框架，DOM 操作简单
  $ 等封装简化了js开发(开发者)

- web 1.0(csdn blog)->2.0(twitter,facebook)
- 演变到VUE / REACT 现代前端框架
