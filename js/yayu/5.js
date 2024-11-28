const cy={
    name:'陈炎',
    playBasketball:function(){
        console.log('冻梨科比来了');
    }
}
function Person(name,age){
    console.log(this)
    this.age=age;
    this.name=name;
}

Person.prototype=cy;
//原型？cy


const wu=new Person('武',19);
wu.playBasketball();