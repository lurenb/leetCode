var person1 = {
  name: "person1",
  foo: () => {
    // 这里面的this是window，对象不产生单独作用域
  },
  foo2: function () {
    return () => {
      // 这里面的this是foo2function的this，也就是person1
    };
  },
};
