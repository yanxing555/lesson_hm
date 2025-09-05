# next.js 全栈项目

- users & posts
- jwt 双token 鉴权
- 虚拟列表 分页
    AI 爬虫 掘金100条数据 
- 大文件上传 
- ai 工程化 
    流式输出 
    function Tool
    mcp 
- ai 搜索

## 双token 
单token localstorage  长期, 第三方拦截 不安全,
安全 + 无感刷新登录
双token 
- accessToken 校验身份 重要 时间有效期变短 h小时为单位 cookies
    过期怎么办？
- refreshToken 刷新 7d 时间长
    没有过期,refreshToken 发到服务器 /api/auth/refresh 
    返回新的accessToken 无感刷新

## 开发流程
- .env
    mysql url
    建立数据库
- prisma 初始化
    npx prisma init 
    orm 工具
    object relation mapping 关系映射 
    User(表) => User类
        一行 => new User() 实例
    底层数据库操作 映射成 高级的面向对象操作 
- Prisma Schema 是定义数据库模型、关系和数据类型的配置文件，用于生成类型安全的数据库客户端。
    数据库的设计图 
    比navicat 好的地方在哪？ schema + git 留下数据库设计和修改的历史
    文档型的，可以追踪。留底，方便后续的维护和修改。

- Model 表的映射模型 
    @@map("users") 指定模型对应的表名
    posts   Post[]  一对多的关系 
    createdAt updatedAt primsa 自动维护
    @id 主键  @unique 唯一索引
    Model User{
        columns name type @default
        索引
        relation
    }
    - migration 迁移文件
        记录 

    - npx prisma migrate dev --name init 产生迁移文件
    - npx prisma migrate reset --force 重置数据库
    - npx prisma db push 直接应用到数据库 

- restful API 
- lib/ 复用的js模块 
- regexp
    前端，后端都要会正则
    - ^ 开始标识符 
        
    - $ 结束标识符 
    
    - /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        邮箱的正则
    
        [a-zA-Z0-9._%+-] 表示要有 a到z A到Z 0到9 允许. _  % + -等符号
        + 一次或多次 
        @ 字面量
        [a-zA-Z0-9.-]+ 域名
        \. 字面量
        [a-zA-Z] 域名后缀
        {2,} 域名后缀至少要有2个字符

- bcryptjs 加密js 模块  单向的加密算法 （不能被解密）
    register 加密一次
    login  password 加密一次  
    比较的是加密后的是否一致
- 状态码
    - 200 OK 成功
    - 201 Created 成功创建
    - 400 Bad Request 客户端请求错误
    - 401 Forbidden    
    - 403 Forbidden 禁止访问
    - 404 Not Found 未找到
    - 409 Conflict 冲突
    - 500 Internal Server Error 服务器内部错误
 

- middleware 的概念
    中间件 配置一个列表
    /dashboard 
    Middleware 是中间件，用于在请求和响应之间执行预处理逻辑，如日志、认证、数据解
    析等。
    - 配置一个需要登录的页面数组
    - some startWith
    - response.next() 放行
    - response.redirect() 跳转

    - 通过jwt verify方法拿到payload后,添加了自定义的请求头 
        x-user-id
        后续页面就可以拿到这个值

- JWT 的构成
    - 头部 
        签名算法 HS256
    - 载荷
        {userId:....}
    - 签名
        secretKey 

- 后端安全和性能
    - 一定要做容错处理
       try{}catch(){}finally{}
    - 释放数据库对象
- prisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findMany()
    prisma.user.findUnique()
    prisma.user.update()
    prisma.user.delete()
        where:{},
        data:{}
        
