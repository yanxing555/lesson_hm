# v-if v-show 的区别
场景:

1. v-if是真正的**条件渲染**, 切换时会触发事件的监听器,本身和子组件的挂载卸载。
2. v-if 是**惰性**的,如果初始条件为假,什么也不做
3. v-show  简单初始条件于否的都要渲染 基于css display 切换
4. v-show 使用后用后于频繁的切换的场景/v-ifgeng 

场景举例
- 登录弹窗 v-if
- form 表单的校验 v-show
- 动画效果 v-show + transition
- 用户权限显示(user,admin ) v-if

