console.log('同步Start');
const promise1= promise.resolve('First Promise');
const promise2= promise.resolve('First Promise');
const promise3= new Promise(resolve=>{
    resolve('Third Promise');
})

setTimeout(()=>{
    console.log('下一把再相见');
    
},0)
promise1.then(value=>console.log(value));
promise2.then(value=>console.log(value));
promise3.then(value=>console.log(value));
console.log('同步end')