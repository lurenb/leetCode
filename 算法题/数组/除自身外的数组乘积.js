const nums = [1, 2, 3, 4];

var productExceptSelf = function (nums) {
  const starArr = [];
  const endArr = [];
  const res = []
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      starArr.push(nums[i]);
      endArr.push(nums[nums.length - 1]);
      continue;
    }
    starArr.push(nums[i] * starArr[starArr.length - 1]);
    endArr.push(nums[nums.length - 1 - i] * endArr[endArr.length - 1]);
  }
  console.log(starArr);
  console.log(endArr);
  for (let i = 0; i < nums.length; i++) {
    starArr[i-1]*endArr[]
    res.push()
  }
};
productExceptSelf(nums);
