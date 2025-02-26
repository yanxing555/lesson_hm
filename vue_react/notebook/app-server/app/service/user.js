'use strict'

const UserService = require('egg').Service;

class UserService extends UserService {
  async getUserByName(usename) {
    const { ctx } = this;
    try {
      const res = await context.model.User.findOne({ // 查找数据库
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