# 后端http 伺服
# request axios 调用deepseek api
# jsonify 接口json化
from flask import Flask, request, jsonify, send_from_directory 
from openai import openAI
from dotenv import load-dotenv
#系统模块

load-dotenv()
# 实例化Flask app 对象
# python 没有new 
# 后端驱动的开发中 static 静态文件 => 前端
# 传统的后端，mvc 没有前后端分离
# 根路径
# 在static 目录下启动静态服务器 cdn
# / 直接指向 static
app = Flask(__name__, static_url_path='', static_folder='static')

# 装饰器模式 mvc mvvm view
# 吧server_index 装饰成路由的处理函数
# 路由 动态资源 router ->取数据 -> 渲染 index.html
# 文件系统os
@app.route('/')
def server_index():
  return send_from_directory('static', 'index.html')

# restful 驱动 网站设计的一个规范 一切皆资源 url + method
# deepseek 路出接口
# 装饰器模式
@app.route('/chat',methods=['POST'])
def chat():
  try:
      data = request.json
      print(data)
      return jsonify({'message':'Hello','world!'})
    except openai.error.OpenaiAIError as e:
      retuen jsonify({'error':str{e}}),500
if __name__ == '__main__':
  app.run(debug=True)