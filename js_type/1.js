 let a=null; //栈内存
 console.log(a);
 // 堆内存

 let largeObject={
    data: new Array(1000000000).fill('a')
 }
// 释放内存 垃圾回收
// 哲学
 largeObject= null