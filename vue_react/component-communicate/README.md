- vue3 响应式 
  - ref 把一个数据变成响应式数据 .value 拿到值
  - ref .value 是一个响应式对象 value Object.defineProperty  性能好
  - reactive  是响应式代理 proxy 代理对象 开销大

- 父子组件通信
  - props 父传子 数据 
  - @child-message="handleEvent" 自定义事件名称+处理函数 attrs
  - 子组件 一切由外界传的 都得申明()一下
  emit 汇报
    emits = defineEmits(['child-message'])
  - emits(event_name,params)