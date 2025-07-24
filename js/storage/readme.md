# Storage 存储
 
  - 前端存储
    - cookie
    - 登录状态
    - 购物车
    - localStorage
    - sessionStorage
    - IndexedDB
  - 后端存储
    MySQL,NoSQL,MongoDB
  - 缓存

## 首页 
- 用户的登录状态
  cookie
  - 服务器识别用户
  - B/S 架构软件 http 协议
  - http 0.9 版本
  - http 是无状态协议
    请求一次和一千次，只要用的method或url一致，拿到的内容都是一致的
    如何在请求get时带上身份状态
  - http 1.0 正式版 这个时候才正式具有header 请求头
  content-type: 
  authorization:
  cookie uid=1241212


  有户带上，服务器解析 你的身份了
  http 协议还是无状态的，请求头可以夹带一些私货
- 登录界面有哪几个状态
  未登录 已登录 用户身份 登录过期  时间 过期 主动登出

- 前后端联调
  - 前端负责表单
    阻止默认行为
    收集表单值
    fetch 请求 await 等待服务器端响应请求 
    POST /login api 地址  前后端接口
    后端
    构建后端路由
    用户名和密码的校验
    通过设置一个cookie 请求头里面的cookie Set-Cookie
    通过服务器端的返回 http无状态的协议一起回到请求端
    前端存储里 Cookie 有了内容
  ## Cookie
  Cookie 是浏览器存储的小文本数据，用于记录用户会话，偏好等信息，便于网站识别用户
    - 每次http的时候，，会自动带上cookie 信息
    - cookie 小饼干 (内容小) 关键的身份信息，存储在浏览器中(位置)
    - http 协议还是无状态的，每次请求独立 ，他是通过携带请求头中的cookie信息实现身份的认证


