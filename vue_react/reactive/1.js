// es6 代理对象
const proxy = new Proxy({},{
    // 拦截行为 
    get: function(obj,prop){
            console.log('设置get 操作');
            return obj[prop]
        
    },
    set:function(obj,prop,value){
        console.log('设置set操作');
        obj[prop]=value
    }
})

proxy.time =35;
console.log(proxy.time)