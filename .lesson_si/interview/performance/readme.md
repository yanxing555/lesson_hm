# 性能优化

## 重绘重排

- 重绘：
    元素的外观发生改变，但是位置没有改变，比如颜色、背景颜色等。
- 重排（性能开销更大）：
    DOM元素的尺寸、位置发生改变，比如宽度、高度、位置等。
    重排一定会导致重绘，因为位置改变了，所以外观也会改变。
    但是重绘不一定重排。

### DEMO 1 批量修改DOM 
```js
// 不对 多次操作可能触发多次重排 性能开销更大
// 虽然现代浏览器会批量处理更新 会合并修改，优化
// 但是可以避免 
const el = document.getElementById('myEl');
el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '10px';
// good
el.style.cssText='width:100px;height:100px;margin:10px' // 用cssText 而不是一堆的js代码
el.className='my-class' // 用类名而不是一堆的js代码
```

### 使用文档碎片
```js
const fragment = document.createDocumentFragment(); 
for(let i=0;i<10;i++){
    const el = document.createElement('div');
    fragment.appendChild(el); // 没有重排
}
document.body.appendChild(fragment); // 一次重排
// 批量添加元素时，使用document.createDocumentFragment()优化
```

### 脱离文档流进行操作 下线
```js
const el = document.getElementById('myEl');
el.style.position='absolute';
el.style.display='none';
el.style.left='100px';
el.style.top='100px';
...进行大量DOM操作

el.style.display='block';
el.style.position='static';
```
### 缓存布局信息

```js
// offsetTop 读取，但是每次都会触发重排以获得盒子的布局信息
for(let i=0;i<100;i++){
    el.style.top=el.offsetTop+1+'px';
}

// 所以要缓存一下这个数据 只进行一次
const top = el.offsetTop;
for(let i=0;i<100;i++){
    el.style.top=top+i+'px';
}
```

### 使用transform 代替位置调整
```js
el.style.left='100px';
// 只触发重绘，性能更好。
el.style.transform='translateX(100px)';
``` 
## 资源加载优化
- 图片懒加载
- 路由懒加载
    代码文件上，code spliting 代码分割
    路由上，lazy loading 路由懒加载
- 资源预加载 
    未来可能会用到的资源
    <link rel="prefetch" href="/next-page.js">
    dns-prefetch dns 预解析
    preload 当前页面必须解析，立即加载
- script 资源的加载 阻塞的
    默认没有
    async 并发加载脚本，不阻塞HTML解析
    defer 延迟执行脚本，等HTML解析完成，DOMContentLoaded事件触发前执行
    modele // 功能
- webp 格式图片
    图片的优化，显著的减少体积，并且质量不受影响 
- 图标字体库
    减少http请求数

## JS执行优化 
- 防抖节流
- web workers 处理复杂计算
- requestAnimationFrame 优化动画
- requestIdleCallback react fiber 机制

## 缓存策略
    - 强缓存和协商缓存
        Expires(客户端时间不准确)/Cache-Control 不发送请求
        LastModified if-modified-since 时间戳  304
        ETag if-none-match 
    - localStorage/sessionStorage/cookie
## 网络优化
    - CDN优化
        静态资源,分流,会缓存文件
        多路复用 多域名服务器 img1.baidu.com img.baidu.com
    - Gzip压缩
    - http/2 多路复用
    - DNS 预解析

## 首屏优化
    - SSR
        组件渲染在服务器端已经完成编译,执行,浏览器直接显示
    - 骨架屏
    - http 2.0 server push 首屏数据推送

## 性能测试
    - chrome 的performance面板
    可以看到各项性能指标,针对性的优化,给出优化建议

    - 减少首屏JS/css 体积 (code spliting)
    代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，以便
    按需加载或并行加载，从而优化应用的加载性能和执行效率。
    - 使用transform代替位置调整,预加载相关资源
    掘金 js =  (vue + vue-router) + App.vue + Home.vue + Components
    vue+vue-router 单独拆分  缓存 基本是不会变的
    App.vue + home.vue + Components 业务代码 经常改,单独
    做了一次升级

- lighthouse 
    是chrome 的一款打分插件,会在 性能,无障碍,最佳实践,SEO 打分
    并给出问题和优化建议,细致到可以直接
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint 
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指
    标，用于测量页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。
- LCP Largest Contentful Paint
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指
    标，用于测量页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。
