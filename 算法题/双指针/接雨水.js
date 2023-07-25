/* 
栈：单调栈，加入的元素需要比原来栈顶的元素小

*/

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let water = 0;
if (height.length < 3) {
  return 0;
}
let stack = [];
for (let i = 0; i < height.length; i++) {
  while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
    let top = stack.pop()
    
    if(stack.length>0){
        let temp = 
    }


    // let top = stack.pop();
    // if (stack.length == 0) {
    //   break;
    // }
    // let distance = i - stack[stack.length - 1] - 1;
    // let h = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
    // water += distance * h;
  }
}
