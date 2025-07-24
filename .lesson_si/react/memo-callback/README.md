# 性能优化hook

- 父子渲染顺序
    - 执行的时候先外到内    组件树
    - 完成渲染 完成组件的挂载 先内到外
- Button 组件该不该重新渲染？
    - 父子组件局部， count 改变和Button组件没关系
        button JSX 不重新渲染 重绘重排
    - 性能优化
        响应式和性能 非常好
        切分组件 热更新
        组件之前独立
        子组件 React.memo
        createContext useContext所有状态全部给一个Context 好吗？
        不好，性能 所有状态都是一个reducer生成的

- 组件划分的粒度
    - 组件拆分 单向数据流
    - 就负责渲染的子组件(props + jsx)
    - 复用，好管理之外 提升性能
    - 状态更新后组件函数要重新运行
    - useCallback + React.memo