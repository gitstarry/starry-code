const instanceof1 = function (obj, con) {
  let _proto = obj.__proto__;
  if (!_proto) {
    return false;
  }
  const conPrototype = con.prototype;
  while (true) {
    if (_proto === null) return false;
    if (_proto === conPrototype) return true;
    _proto = Object.getPrototypeOf(_proto);
  }
};

console.log(instanceof1("", String));
console.log(instanceof1([], Array));
console.log(instanceof1({}, Object));
const bigNum1 = BigInt("123456789012345678901234567890");
const bigNum2 = BigInt("100000000000000000000000000000");

const sum = bigNum1 + bigNum2;
console.log(sum);
