function filterByType(value,type){
    // es6 filter 方法
    return arr.filter(iten =>{
        const itemType = typeof iten;// 类型
        if(type ==='object'){
            return item !== null && !Array.isArray(item) && itemType === type;
        }

        if(type === 'array'){
            return Array.isArray(item);
        }

        return itemType === type;
    })
}