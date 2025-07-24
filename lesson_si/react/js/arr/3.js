const arr = new Array(5);
// console.log(arr)
let obj={
    name:'葫芦娃'
}
let obj2={
    skill:'喷火'
}
obj._proto_=obj2;
console.log(obj.skill);
for(let key in obj){
    console.log(obj[key]);
}
console.log(arr.hasOwnProperty(0))