 # vue 3 组件生命周期
   - 组件类实列化
   template 模板的编译，css的合成，js的执行
   - 组件挂载到父组件上，完成渲染
   onBeforeeMount 
 - v-if 切换卸载/ v-show 切换显示
   弹窗，广告，loading...
   - 条件渲染 true 显示 false 隐藏
   - 区别 v-if  不会挂载到组件树 v-show 会挂载到组件树 display:none css 切换
   - 显示-> v-if false 销毁组件
   - 隐藏-> v-if true 挂载?
   - 有的组件需要toggle 显示/隐藏
     - 响应式数据 showComponent
     - 页面状态？

- 组件是一个类 Vue.component LifecycleComponent ref+defineProps ... new 实例化
template + css + js 结合， 做好准备-> 挂载到父组件-> 渲染到页面