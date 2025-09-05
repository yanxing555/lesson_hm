// let a:any =1; // any 任何类型
// a="1" // 不能滥用, 学会用泛型 
// function getFirstElement(arr:any[]):any{
//     return arr[0]
// }
// const numbers = [1,2,3]
// const firstNum = getFirstElement(numbers)
// console.log(firstNum)

// // 复用性，函数参数，返回值 指定类型
// const strs = ["a","b","c"];
// const firstStr = getFirstElement(strs)
// console.log(firstStr)
// 复用这个函数的同时，传入类型参数 

function getFirstElement<T>(arr:T[]):T | undefined{
    return arr.length >0 ?arr[0] :undefined
}

const strings = ["hello","world"];
const firstStr = getFirstElement(strings); // ts类型推导
// const numbers = [1,2,3]
// const firstNum = getFirstElement<number>(numbers)
// firstNum?.toFixed(2);

