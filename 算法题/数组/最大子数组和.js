var maxSubArray = function (nums) {
  let pre = 0;
  let res = nums[0];
  for (let i in nums) {
    pre = Math.max(nums[i], nums[i] + pre); // 这是关键，子任务是以nums[i]结尾的最大数组和
    res = Math.max(res, pre);
  }
  return res;
};
