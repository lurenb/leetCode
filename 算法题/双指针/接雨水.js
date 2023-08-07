/* 
栈：单调栈，加入的元素需要比原来栈顶的元素小

*/

const height = [4, 2, 0, 3, 2, 5];

var solut = (height) => {
  let water = 0;
  if (height.length < 3) {
    return 0;
  }
  let stack = []; // 存放索引值
  for (let i = 0; i < height.length; i++) {
    // 当新获取的数组值大于当前栈顶所表示的数组的值时进入循环进行添加雨水值的处理
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      if (stack.length > 0) {
        let preTop = height[stack[stack.length - 1]]; // 获取去除之前栈顶元素后最新的栈顶元素
        let hig = Math.min(
          preTop - height[topIndex],
          height[i] - height[topIndex]
        ); // 获取高度
        let wid = i - stack[stack.length - 1] - 1;
        water += hig * wid;
      }
    }
    stack.push(i);
  }
  return water;
};
console.log(solut(height));
