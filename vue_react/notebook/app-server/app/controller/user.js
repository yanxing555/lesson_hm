'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller{
    // 注释
    async register(){
          // 解析请求体 usename password
        const {ctx}= this;
        // 结构请求体
        const {usename,password}=ctx.request.body;
        // 校验参数
        if(!usename || !password){
            ctx.body={
                code:400,
                msg:"用户名或密码不能为空"
            } 
            return;
        }
        // username 是否存在
        const userInfo=await ctx.service.user.getUserByName(usename);
        console.log(userInfo,'//////////');
    }
    async login(){
      
        
    }
}

module.exports = UserController;