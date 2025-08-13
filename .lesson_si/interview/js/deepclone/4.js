const target = {
    a:1
}
const source={
    // 对象的嵌套
    b:{
        name:'猫腻思',
        hobbies:'play csgo'
    },
    c:1
}
// 浅拷贝
// object.assign(target,source);
// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj);
newObj.b.name='Dangk1ng';
newObj.c=2;
console.log(newObj);
console.log(source);