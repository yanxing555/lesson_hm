// 生成器函数
// 函数内部有异步
function* idGenterator(){
    let id = 0;
    while(true){
        id++;
        yield id;
    }
}
// 调用生成器函数
let id = idGenterator();
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
