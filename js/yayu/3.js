function Person(name,age){
    this.age=age;
    this.name=name;
}

Person('chang',19)//普通函数来运行
const dys = new Person('chang',19)//构造函数来运行 
const dyf = new Person('awei',20)// 构造函数方式运行