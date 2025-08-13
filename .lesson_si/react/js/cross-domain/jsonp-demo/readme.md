# 封装的JSONP

- 只能解决GET 请求的跨域问题
    http://localhost:3000/say?callback=biaobaiCallback&wd=ilikeyou
- 需要后端配合
    后端输出的方式要加上padding
- 不太安全
    全局挂在一个show callback 函数 容易受到攻击