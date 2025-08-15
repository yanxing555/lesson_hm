const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    },
    filed5: [2, 4, 8]
}
target.target = target; // 循环引用
// es6 新增数据类型 hash Map

function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target)?[]:{};
        for (const key in target) {
            cloneTarget[key] = clone(target[key])
        }
        Map.set(target,cloneTarget);
        return cloneTarget;
    } else {
        return target
    }
}
// 栈溢出
clone(target);