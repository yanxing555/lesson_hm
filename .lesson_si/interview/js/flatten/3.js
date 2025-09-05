// 栈模拟
function flatten(arr){
    // stack, 递归 LIFO 栈
    let stack = [...arr];
    let res = [];
    while(stack.length){
        let item = stack.pop();
        if(Array.isArray(item)){
            stack.push(...item);
        }else{
            res.push(item);
        }
    }
    return res.reverse();
}