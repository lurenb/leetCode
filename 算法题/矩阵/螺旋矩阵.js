var spiralOrder = function (matrix) {
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  const res = [];
  while (true) {
    // 上
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    if (++top > bottom) break;
    // 右
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
    if (--right < left) break;
    // 下
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
    if (--bottom < top) break;
    // 左
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
    if (++left > right) break;
  }
  return res;
};
/* 
解题思路：
while里面套四个for循环，一次while循环完成一周上下左右的遍历

首先设定上下左右边界

其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界

判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案

若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理

不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案

*/