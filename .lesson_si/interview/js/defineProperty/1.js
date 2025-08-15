// Object.defineProperty
var obj ={}; // 对象
// es5 就提供的api 兼容性更好
// react 和vue 最新版 对浏览器有要求
Object.definedProperty(obj,"num",{
    value:1,
    configurable:true,
    enumerable:true,

    // get:function(){
    //     console.log('读取了属性')
    //     return 1
    // }
})
// obj.num = 2;
// console.log(obj.num)
// delete obj.num;
// console.log(obj.num);