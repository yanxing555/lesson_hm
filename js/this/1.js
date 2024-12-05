"use strict"

var x=2;

var obj = {
    x:1,
    foo: function() {
        console.log(this);
        console.log(this.x);
    }
  }
  // 函数体
  var foo = obj.foo
  // 相同点是：同一个函数在运行
  // 区别呢：被谁调用，调用的一个位置不一样
  // 调用的时候 调用方式不一样
  // 对象的方法被调用
  
 
  var obj2={
    x:5,
    foo:foo
  }
  //相同点是：同一个函数在运行
  obj.foo()
  obj2.foo()
   // 普通函数被调用
  foo();// 2没有必要
  