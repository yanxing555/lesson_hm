# React NoteBook 全栈

- npm i react-router-dom -S 
  --save 的简写  一直依赖  react-router-dom@7 
  --save-dev -D 开发阶段依赖
- 项目阶段
  - 开发阶段 development   vite 
  - 测试阶段 test   其他同事的电脑上 没有环境 npx 
  - 上线阶段 production    打包-》 项目部署？-》 dns -> 上线

- 编程风格
  - react 组件 由函数组件jsx 文件 + 样式文件css 组成
    - 组件目录大写 
    - 组件声明文件小写 名字叫index.jsx 
    引入的时候 直接引入组件目录即可， 组件类的作用， 同时不用去引入 index.jsx 
  - return (JSX)  dom树的对齐， 优雅

- 页面级别组件
  - 首页
    Home.vue 

- es6 module 的语法
  import React, { useState as , useEffect, useMemo } from 'react'
  default  解构的引入
  import React.useState from 'react'
  import * as React from 'react'

  as 起别名

- key 的用法
  循环输出组件，需有给唯一的key 值需要唯一
  update 性能 

- 选择框架
  - zarm 移动端react ui组件库
    指定3.1.2版本 npm i zarm@3.1.2
  - 引入组件 button
  - 引入样式
  - 引入配置ConfigProvider theme  primaryColor
  - 主题定制 theme primaryColor
- npm run build
  - 上线之前先打包
  - dist/ 结果目录
    性能 
    - src/ 开发目录
      代码质量和可读性
    - 不需要注释、换行等，只要浏览器运行就好 
      文件小，压缩， 传输更快
    - 组件打包成js文件， css 打包成一个css文件 
      性能优化 http 并发数 一个js 文件 
      - 依赖关系
        - 不需要模块化
          被依赖的放在上面， 依赖的放在下面
        - 递归依赖关系
        - 打包成一个js文件
    - vite 很快 
  - 截图
    size gzip 大小 http 主动启动gzip   压缩传输的
    底层是tcp/ip 

- vite 
  - 按需加载 vite-plugin-style-import

- less stylus css 预编译
  - 快
  - less
  - 变量 嵌套 混合函数
  - module css 
    - style.module.less
    - 支持 css 模块
      - vite 申明 less -> 解析
      - {s.index}

- 移动端适配
  rem 10rem = 宽度 
  - lib-flexible rem 适配
  - postcss-px2rem 包 自动化px 转 rem 提高开发效率
    - postcss 允许开发者通过一系列插件来处理和增强 CSS
    文件 ， 使其具备更高的可维护性，兼容性和性能

- axios 配置
  - baseURL 
    - 


## egg.js 阿里的开源框架
- koa 极简
    - middlewares 洋葱模型 函数
    - http listen 
    - ctx
- 企业级开发 中大型项目
  mvc
  npm init egg --type==simple
  后台开发的模板
  - app 目录应用开发的主目录
  - 约定大于一切
    - router.js 后端路由

  - URL 的构成
  queryString params 
  http://localhost:3000/user/1

- csrf 攻击
  - 拦截? 
    apifox  不是用户 
    userAgent

- post 请求体的格式
  - form-data 有附件
  - x-www-form-urlencoded key=>value
  - json  复杂数据结构

  ## 开发流程
  - idear 创意
    - aigc结合
  - 需求分析
    - 用户需求
    - 功能点
  - 建立数据库
    - 设计表结构
  - 前端开发
    - react
  - 后端
    - egg.js
  - 测试
  - 部署上线
- get / post 区别
 CREATE TABLE IF NOT EXISTS user ( 
  id INT AUTO_INCREMENT PRIMARY KEY, 
  username VARCHAR(100) NOT NULL UNIQUE, 
  ctime VARCHAR(100) NOT NULL, avatar VARCHAR(100),
   signature VARCHAR(100), 
   password VARCHAR(100) NOT NULL ) ENGINE=InnoDB DEFAULT 
   CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

## 代码开发风格的一部分
- AI编程工具的使用
  - MarsCode
  - Cursor / Trade
  - prompt engineering
  - "交互" 前端不可替代 
  - 多语言 低代码 快速学习
  - 不只是项目开发前 prompt 生成项目
  - 细节功能 喂伪代码 aigc代码更靠谱

- mysql 
  - mysql2 数据库驱动
  - egg-sequelize orm 框架
    不需要写sql 直接对象开干
    封装了sql 
  - service  
    CRUD 
  - model 
    USer 


