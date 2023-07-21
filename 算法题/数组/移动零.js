var moveZeroes = function (nums) {
  let zero_nums = 0;
  const newarr = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!nums[i]) {
      zero_nums++;
    } else {
      newarr.push(nums[i]);
    }
  }
  let arr = Array(zero_nums).fill(0);
  return newarr.concat(arr);
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
