'use strict'

const Service = require('egg').Service;

class UserService extends Service {
  async getUserByName(username) {
    const { ctx } = this;
    try {
      const result = await ctx.model.User.findOne({ // 查找数据库
        where: {
          username
        }
      });
      return result
    }catch (error) {
     console.log(error);
     return null; 
    }
  }
}

module.exports = UserService;