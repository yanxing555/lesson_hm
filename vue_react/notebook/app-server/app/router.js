/**
 * @param {Egg.Application} app - egg application
 */
// commonjs 模块 路由模块
module.exports = app => {
  // app 应用
  // router 路由
  // controller 控制器
  const { router, controller } = app;
  const _jwt = middleware.jwtError(app.config.jwt.secret);
  // console.log(decode)
  ctx.user = decode;
  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  router.get('/user/:id', controller.home.user);
  router.post("/add",controller.home.add);
  router.post('/register',controller.user.register); //登录
  router.post('/login',controller.user.login); //注册
  router.post('/upload',controller.upload.index); //上传文件
  // 部分修改资源 put 完全替换(文件)  patch 部分
  router.patch('/user/signature', _jwt,controller.user.editSignature)
  router.get('user')
};
/**
 * @param {Egg.Application} app - egg application
 * @description 此模块为 Egg.js 应用的路由配置模块，定义了应用的各种路由规则。
 */
// commonjs 模块 路由模块
module.exports = app => {
  // app 应用
  // router 路由
  // controller 控制器
  /**
   * 从 app 对象中解构出 router 和 controller 对象，方便后续使用。
   * @type {Object} router - 路由对象，用于定义路由规则。
   * @type {Object} controller - 控制器对象，包含处理路由请求的方法。
   */
  const { router, controller } = app;
  /**
   * 使用中间件 jwtError 处理 JWT 错误，传入 JWT 密钥。
   * @type {Function} _jwt - 处理 JWT 错误的中间件函数。
   */
  const _jwt = middleware.jwtError(app.config.jwt.secret);
  // console.log(decode)
  /**
   * 将解码后的用户信息赋值给 ctx.user。
   * 注意：这里的 decode 变量未定义，可能需要修正。
   */
  ctx.user = decode;
  /**
   * 定义根路径的 GET 请求，调用 controller.home.index 方法处理。
   */
  router.get('/', controller.home.index);
  /**
   * 定义 /post 路径的 GET 请求，调用 controller.post.index 方法处理。
   */
  router.get('/post', controller.post.index);
  /**
   * 定义 /user/:id 路径的 GET 请求，调用 controller.home.user 方法处理，:id 为动态参数。
   */
  router.get('/user/:id', controller.home.user);
  /**
   * 定义 /add 路径的 POST 请求，调用 controller.home.add 方法处理。
   */
  router.post("/add",controller.home.add);
  /**
   * 定义 /register 路径的 POST 请求，调用 controller.user.register 方法处理，用于用户注册。
   */
  router.post('/register',controller.user.register); //登录
  /**
   * 定义 /login 路径的 POST 请求，调用 controller.user.login 方法处理，用于用户登录。
   */
  router.post('/login',controller.user.login); //注册
  /**
   * 定义 /upload 路径的 POST 请求，调用 controller.upload.index 方法处理，用于文件上传。
   */
  router.post('/upload',controller.upload.index); //上传文件
  /**
   * 部分修改资源 put 完全替换(文件)  patch 部分
   * 定义 /user/signature 路径的 PATCH 请求，使用 _jwt 中间件进行 JWT 验证，调用 controller.user.editSignature 方法处理，用于修改用户签名。
   */
  router.patch('/user/signature', _jwt,controller.user.editSignature);
  /**
   * 此处代码可能有误，缺少路径参数，应该是 router.get('/user', ...) 之类的形式。
   */
  router.get('user');
};

