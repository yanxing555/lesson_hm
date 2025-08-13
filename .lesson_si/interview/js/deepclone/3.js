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
Object.assign(target,source);
result.b.name='Dangk1ng';
result.c=2;

console.log(source.name,source.b.hobbies,source.c);
