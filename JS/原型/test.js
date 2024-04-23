// 实现一个new

const myNew = (constructor) => {
  const obj = Object.create({});
};

const A = function () {};
const b = new A();
b.prototype = {};
console.log(b instanceof A);
console.log(Object.prototype.toString.call(""));
