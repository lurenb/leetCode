/* 
  思路：双指针
  将不是零的数字都移动到数组前面
*/


var moveZeroes = function (nums) {
  let p = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== 0) {
      nums[p++] = nums[i];
    }
  }
  nums.splice(p, nums.length - p, ...Array(nums.length - p).fill(0));
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
