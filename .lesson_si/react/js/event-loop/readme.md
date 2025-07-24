# event loop





  耗时性的任务？
  - setTimeout/setInterval
  - fetch/ajax
  - eventListener
  - script 脚本
    一个宏任务

- 微任务有那些？
  紧急的,优先的,同步任务执行完后的一个补充
  - promise.then()
  - MutationObserver
    dom 改变在页面渲染前 拿到DOM 有啥改变
  - queueMicrotask
  - process.nexTick()

## 多进程和多线程
- CPU 轮循
- 进程
分配资源的最小单元
  内存 (地址,物理) CPU计算的机会
  独立的进程ID 一定的大小,开销
  程序运行以进程为单位
  - 主进程 
    管理子进程 父子关系 并发 并行
    进程间的通信
    两个独立的进程间通信开销很大
    执行Js 代码...
- 线程
  干活的 
  
- 浏览器是多进程架构的
  - 浏览器主线程
    多线程
  - 一个tab 就是一个渲染进程
    几个tab 几个进程
    安全,一个页面crsah了,别的不受影响
  - 主线程 主角
    js 单线程
    - 简单
    - DOM编程模型 线程的争抢不可以 安全

  - setTimeout 专属定时器线程
    到时间了,callback 放入宏任务队列
    放到event loop 队列中
    为什么setTimeout 不准
    event loop 机制
    宏任务,微任务 队列 
  - addEventListener 没有独立的线程
    DOM 不需要 宏任务队列
  - fetch/xhr 专属的下载线程

- 渲染进程的主线程
  - 解析HTML -> DOM 树 
  - 解析css->cssOM
  - 结合 渲染树
  - layout 树
  - 合并图层
  - V8引擎 JS 执行
  - 独立的绘制线程

- 事件队列？
  - 定时器到点了
  - onreadystatechange 4
  - 宏任务队列
  - 微任务队列

- 页面渲染  

JS 和渲染是互斥的