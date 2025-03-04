function reverseString(str) {
   // 类型
   if(typeof str !== 'string'){
     return '请输入字符串'
   }
    // 字符数组
    //反转的支付数组
    //变成字符串
   return str.split('').reverse().join('')
}