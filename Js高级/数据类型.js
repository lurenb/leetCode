console.log("0" == false);

// null是关键字，undefined是词
var print = console.log;
print(Object.getOwnPropertyDescriptor(global, "null"));

/* 
数据类型的8种判定方法
第一种：typeof
第二种：constuctor 
第三种：instanceof
第四种：isPrototypeOf()
第五种：Object.prototype.toString.call() 通过函数的动态this特性，返回其数据类型
第六种：鸭子类型

*/

class MyArray {
  get [Symbol.toStringTag]() {
    return "MyArray";
  }
}
var a = new MyArray();
print(Object.prototype.toString.call(a));

// export {};
// 判断是不是undefined
isUndefined = function (obj) {
  return obj === void 0;
};
