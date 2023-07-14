// matrix = [[2,1,3],[6,5,4],[7,8,9]]
// 输出：13
// 解释：如图所示，为和最小的两条下降路径
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

const nums = [undefined];
console.log(nums.last());
