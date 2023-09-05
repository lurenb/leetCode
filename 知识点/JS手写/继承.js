// 原型继承，返回值newObj继承参数o的原型
const o = {
  name: "lbk",
  age: 18,
};

function object(o) {
  var newObj = {};
  Object.setPrototypeOf(newObj, o);

  return newObj;
}
//最新实现方法
var newObj = Object.create(o);

// 寄生组合式继承
function Person(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}

Person.prototype.running = function () {
  console.log("running~");
};

Person.prototype.eating = function () {
  console.log("eating~");
};

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends);
  this.sno = sno;
  this.score = score;
}


function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype); // 或者使用之前的方法createObject
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType,
  });
}
