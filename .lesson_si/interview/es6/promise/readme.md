# Promise.all

- MDN 定义
    Promise.all 方法接受一个promise的**iterable**类型的输入 (Array,Map,set都属于ES6的iterable类型)
    并且只返回一个Promise实例,输入的所有promise的resolve回调的结果是一个数组,并按顺序存放,只要任何一个输入的reject
    回调执行,就会抛出错误,promise.all的promise 失败,catch 执行,reject 是第一个抛出的错误

    如果有promise 子项失败,那么其他还没有完成的promise 会继续执行,只不过结果不重要了。

- race,any,allSettled 
    这一组Promise 上的静态方法,带来了promise的并行
    async await 简单 ,不需要then的链式调用,异步变同步,但也不能乱用,它是串行的.
    如果多个promise值前后有依赖 async/await 有优势 但如果没有呢? Promise.all 并发更快

    如果有并行的业务需求,all/race/any/allSettled 更适合且高效。
