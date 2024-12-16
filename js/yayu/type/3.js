console.log(1 / +0) // 正无穷大
console.log(1 / -0)
console.log(Object.is(5, 5));
console.log(Object.is(+0, -0));
// 隐式转换
// NaN Not a Number -> 
console.log(2 * "a", 2 + "a");
console.log(typeof NaN) 
console.log(parseInt("abc")) //解析一个字符串为一个数值会得到
console.log(oarseInt("12abc"))
console.log(NaN == NaN) //NaN不代表确切的值，
console.log(isNaN(NaN),isNan(parseInt("abc")))
