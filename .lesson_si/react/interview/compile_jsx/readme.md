- JSX ?
    - JSX 不能独立运行 
    - 在之前依托于工程化的工具 vite
        jsx -> React.createElement
    - React 环境中

- babel
    Make JavaScript Great Again
    大胆使用JS 最新语法,不用等待
    es6 promise ->es8 async await
    let->var
    ()=>{}->function(){}

- 编译的流程
    - pnpm i@babel/cli @babel/core -D (-D是开发期间的依赖)
        @babel/cli babel的命令行工具
        @babel/core babel 的核心工程
        babel 负责JS 转码
        -D 开发阶段的依赖 dev
        上线后是不用的 
    - ./node_modules/.bin/babel
        转换的规则 
        react -> IOS 代码
        es6+ -> es5
        JSX -> React.createElement