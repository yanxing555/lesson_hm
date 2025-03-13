# 虚拟DOM？ Vitual DOM

- 虚拟DOM 是**真实DOM**在内存的轻量级副本
  - 内存中的对象 (描述真实DOM)
  - 新|旧 虚拟DOM diff patches 
  - 交给VUE vue就会一次性作用到DOM 更新中

- 以下DOM 片段的虚拟DOM 对象是？
  - 虚拟DOM非常方便描述真实DOM
  - type,props,children([])+ 递归(树)
  - 文本节点直接给文字

- 什么时候生虚拟DOM？
  template 编译 -> 生成Vnode -> render -> 生成真实DOM
  响应式 update 数据状态发生改变 -> 没有虚拟DOM -> 重新生成DOM -> 整个替换(重绘，重排太大了)
  虚拟DOM  生成行动Virtual Node 内存中 比较新旧两颗VNode 
  针对性 一次性收集所有的修改 patches 打包给DOM 一次性更新

- v-for key ?
  增 删 改 移动
  ABCD ->  DABC

- Vue 中 h 函数用于创建虚拟 DOM 节点，接收标签名、属性和子节点等参数。

## diff算法
两棵新旧虚拟DOM 树
patches 补丁[]
时间复杂度 O(n)

- 暴力
  - 每个VNode 都要对比O(n)
  - 每个VNode 的属性都要比对 O(n)
  - VNode 的children 比对 O(n)
  O(n^3)
  1000*1000*1000 10亿次

- 只做**同层**比较 O(n) -> O(1)
- **type** 变了 就不再比较子节点O(n) -> O(1)
  div        div
    ul         span 一个节点都没有
      li
      li
- 属性的比较 O(n)
O(n^3) -> O(n)

- 解决所有问题？
  ABCDE   EABCD  
  A E type 不一样
  不能判断类型, 如果有唯一的key 来判断
  列表里有移动的操作
 
 - 新的 vnode 数组中记录的顺序就是目标的顺序。所以把对应的节点按照新 vnode 数组的顺序来移动就好了。

 
      


    