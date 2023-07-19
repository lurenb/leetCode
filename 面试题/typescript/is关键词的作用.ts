/* 
is关键词用于类型保护，
可以在运行时判断一个对象是否属于某个类型，并根据不同的类型执行不同的逻辑。
具体来说，is 关键字通常和 instanceof 运算符一起使用，用于判断一个对象是否是某个类的实例。例如：
*/

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).breed !== undefined;
}

let a1 = new Animal("Tom");
let d1 = new Dog("Tony", "Poodle");

console.log(isDog(a1));  // false
console.log(isDog(d1));  // true

