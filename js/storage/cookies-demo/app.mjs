// 引入Node.js内置的http模块 
// es6 模块化
// mjs 后缀使用es6模块化
// 模块化是语言的能力
// node默认不支持es6 的模块化
// 可能node的最新版本支持es6模块化
// node 准备跟require commonjs say goodbye
// es6 module 更先进 mjs 
import http from 'node:http'; // 确保使用'node:http'来避免潜在冲突

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 设置响应头信息
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  
  // 结束请求并发送响应数据
  res.end('hello http server\n');
});

// 监听特定端口
server.listen(1234, () => {
  console.log('服务器正在监听端口1234');
});