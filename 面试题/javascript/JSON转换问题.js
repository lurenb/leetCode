/* 
JSON.stringify可以进行简单的深拷贝，但是有些属性值为undefined、function、symbol这三类会丢失
*/
const obj = {
  a: undefined,
  b: function () {},
  c: Symbol(),
};

console.log(JSON.stringify(obj)); //{}
