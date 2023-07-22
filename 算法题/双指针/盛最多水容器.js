const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let start = 0;
let end = height.length - 1;
let area = 0;

while (start < end) {
  area =
    height[start] < height[end]
      ? //   ? Math.max(area, height[start++] * (end - start)) 不能这样写，star++会比end-start先执行
        Math.max(area, (end - start) * height[start++])
      : Math.max(area, (end - start) * height[end--]);
}
console.log(area);
