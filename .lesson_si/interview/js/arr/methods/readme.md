# 数组上的方法

## 分纬度来回答,带上业务场景

- 是否修改原数组,非纯函数,有副作用,要慎用。
    push/pop/unshift/shift 栈/队操作
    shift/unshift 性能差,移动元素(数组是连续) 

    splice() 删除/添加/替换  会改变原数组
    splice(start,deleteCount,item1,item2,item,....)
    sort()排序
- 不会修改原数组的方法,纯函数,推荐多用
    - foreach() 无返回
    - map() 返回新数组
    - 查找类
        find/findIndex/findelastindex/findlast
        es5 提供了indexOf()/lastIndexOf() 
        es6 提供了find 查找满足条件的元素 第一个元素下标
        includes 是否含有
        在最近的新版本里 es15 2023 findLastIndex 
        Javascript 是基于ECMAScript 脚本标准开发的
        ES5 兼容性
        ES6 新特性
        ES6+ 对新特性持续在关注

    - 过滤和判定
        filter() 过滤
        every() 所有元素是否满足
        some() 至少有一个元素满足
        any() 至少有一个元素满足
    -
- es6 新增方法
- 遍历/查找类/转换类/拼接类/统计类