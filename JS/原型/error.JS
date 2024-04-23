// 1. 原型基础
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
n: 2,
m: 3
}
var c = new A();
console.log(b.n);
console.log(b.m);
console.log(c.n);
console.log(c.m);



// 2 自有属性和原型继承属性

// 不触发引用指向改变的操作，走得就是原型链 查询 修改的流程，而非创建新属性