// reduce [] => 1项 
// 多维数组 => 1项1维数组
// reduce 方法把数组合并成一个值
const flatten = arr =>
    arr.reduce((pre, cur) => 
        pre.concat(Array.isArray(cur) ? flatten(cur) : cur), [])