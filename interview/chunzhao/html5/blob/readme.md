# html 王者对象Blob

- 图片转成base64字符串编码
- 使用js全局函数 atob(base64)使得编码转换 得二进制的字符串编码
- for 每一个字符
  charCodeAt() 0-255 8  byte的整数
  Unit8Array()
- 二进制文件对象描述 new Blob(Blob是一个二进制对象)([unit8Array]),类型
- 二进制层面上去压缩,切割，修改
浏览器将会为二进制对象提供一个临时访问的地址
- URL.createObjectURL(blob)
