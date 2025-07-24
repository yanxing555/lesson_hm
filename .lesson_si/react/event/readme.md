# readme.md  事件机制
- js 事件机制
    - 异步
    - 监听一个事件
       - addEventListener()
       DOM2  事件
       -  DOM 0
       <a onclick="doSomething()"></a>
       - DOM 1？ DOM版本， 没有去做事件升级

    - addEventListener(type,listener，useCapture?)
    - callback 异步处理的称呼
    - promise then
    - async await 
    监听器 
- 注册事件  addEventlistener
- useCapture false 默认值
    页面是浏览器渲染引擎按像素点画出来 png
    - 先捕获 document ->一层层的去问
        点了谁？
        先触发父元素
    event.target 
        捕获阶段结束，拿到event.target
    冒泡
       event.target 冒泡刀html 


## 事件委托优势 delegation
- 性能优化
    - 极致将事件委托给最外层元素
    react 大型项目开发
    给我们事件节点evnet.target 添加一个唯一属性
- 动态节点的事件
    混动到底部,一次新增一堆的新元素
    事件委托可以有效解决
- 同一元素同一事件注册多次
    - dom节点
    - event type 
    - 监听器(回调函数) 放在event loop中
        event 对象
    - useCapture 

    - event.preventDefault 阻止默认行为 
        form submit
        a 
        阻止冒泡
    - 事件委托  事件代理
        事件冒泡
    - 事件代理
        事件委托
    - 事件委托的原理
        利用事件冒泡的原理，将事件处理程序绑定在父元素上，当事件发生时，通过事件冒泡机制，将事件触发到绑定的父元素上，从而触发事件处理程序。
        事件委托的优势在于可以减少事件处理程序的数量，提高性能。
    - event.stopPropgation

    - event.stopPropagation

- 用户交互的便利体验问题
    - toggle按钮
    - 点击页面任何空白地方可以关闭  方便 stopPropagation
    - 显示区域可以交互 stopPropagation

 - SyntheticEvent 合成事件
    - 委托 #root
        性能优化框架帮我们做
    - 事件池 Event pooling
      事件对象的回收利用
      大型密集交互的应用
    - 最近的版本中又可以安全使用了
     



    