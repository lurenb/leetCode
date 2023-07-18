function Person() {}
var person = new Person();
person.name = "小明";
console.log(person.name);

// 每个函数都有一个prototype属性
Person.prototype.name = "Kevin";
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);
