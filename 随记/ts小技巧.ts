/* 
只读数组
*/
const person: Readonly<{ name: string; age: number }> = {
  name: "Alice",
  age: 30,
};
/* 
使解构来提取属性
*/
function printPersonDetails({ name, age }: { name: string; age: number }) {
  console.log(`Name:${name},Age:${age}`);
}
/* 
数组泛型优于类型转换
*/
const numbers: Array<number> = [1, 2, 3];
/* 
    枚举作为常量
*/

enum Fruit {
  APPLE = "apple",
  BANANA = "banana",
  ORANGE = "orange",
}

/* 
利用交叉类型来组合类型
*/

interface Shape {
  color: string;
}

interface Circle {
  radius: number;
}

interface Rectangle {
  width: number;
  height: number;
}

type RedCircle = Shape & Circle;
type RedRectangle = Shape & Rectangle;

/* ts常用语法 */
export interface Contact {
  name: string; // 姓名
  phone?: string; // 手机号
  email: string; // 邮箱
  avatar: string; // 头像
  userid: string; // id
}

/* 
  Omit去除类型中某些项 
  例如现在需要定义一个新的数据类型，新的联系人列表中没有邮箱这一项，可以用Omit剔除
  */
export type OmitEmailContact = Omit<Contact, "email">;
/* 去除多个 */
export type OmitEmailAvatarContact = Omit<Contact, "email" | "avatar">;
/* Pick 选取类型中指定类型*/
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo1, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

/* 将类型所有选项变为可选类型 */
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
