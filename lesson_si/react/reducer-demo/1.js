// 纯函数
// 相同的输入,一定会有一样的输出
// 没有副作用,不操作变量,不发请求,不改DOM
// 管理数据状态 纯函数去管理,全局状态更正确
    // 重要 一堆的地方都要用到它
    // 修改值,修改方法 流程
function add(a,b){
    return a+b;
}

// 不纯的
let total = 0;
function addToTotal(a){
    total += a;
    return total;
}
