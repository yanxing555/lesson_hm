- TCP/IP 是传输层协议。
  建立连接 三次握手， 四次挥手
- HTTP 协议。而Socket 是应用层协议。
  - 长链接
  - 消息推送
  - 广播
- B/S 架构
- 即时通讯  Scoket 协议


- http 协议 和 websocket 协议
  - http 协议 是无状态的， 每次请求都是独立的url 返回一致 cookie authorization， 没有上下文关系
  - websocket 协议 是有状态的， 建立连接后，分配一个socket id  可以保持连接， 可以发送消息， 可以接收消息
  - websocket 协议 是基于 TCP 协议的， 是应用层协议， 是建立在 TCP 协议之上的
  - http 协议 和 websocket 区别
  - http 是无状态的， websocket 是有状态的
  - http 是单向的， websocket 是双向的
    http client -> request -> server -> response -> client 单向的
    http server 不可以主动向client 发消息
    websocket 双向 服务器可以主动向客户端(client)发消息
  - http 是基于请求响应的， websocket 是基于事件的
    onmessage 
    send 

- websocket 服务搭建流程
  - 首先基于http 服务 访问chat 页面
  - html5 websocket 向服务器端的socket 服务发起连接请求
    ws://localhost:3001/
    101 Switching Protocols 切换了协议
    接下来都是双向, 有状态的socket 协议
    ws://localhost:3001/
  - client -> server
    server -> client
    client -> client
    基于事件的通讯
    send    onmessage

- html5 websocket 
- http 和websocket 区别
- 状态码 101 switch protocols
