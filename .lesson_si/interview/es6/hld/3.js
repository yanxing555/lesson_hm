// thenable
function light(color,ms){
    console.log(color);
    return new Promise(r=>setTimeout(r,ms));
}

function loop(){
    light('red',3000)
    // 控制流程 异步变同步
    .then(()=>light('yellow',1000))
    // 当返回值也是一个Promise的时候,继续thenable
    .then(()=>light('green',2000))
    .then(()=>loop());// 递归循环



}