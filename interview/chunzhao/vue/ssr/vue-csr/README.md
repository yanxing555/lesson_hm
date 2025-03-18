# CSR 和 SSR 

- CSR SPA
  优点
  - 用户体验好,不需要等待服务器响应, 不会白屏
  所有 的路由和页面(组件)都是在客户端进行解析和渲染的 Client Side Rendering
  缺点
  - 首屏加载慢
    懒加载 按需加载
    执行组件的编译和渲染
  - SEO 不友好

- ssr 企业官网
  - 将组件的html字符串放到服务器端
  - SEO 更好

- npm i @vue/server-renderer  渲染 -> html 字符串
- @vue/compiler-ssr 编译