// 最长连续序列，用到了哈希集合
const nums = [100, 4, 200, 1, 3, 2];

const numsSet = new Set(nums);
let longest = 1;
for (const num of numsSet) {
  if (!numsSet.has(num - 1)) {
    let currentNum = num; // 目的是找到连续数字的最小值然后进行累加计算最长值
    let currentStreak = 1;

    while (numsSet.has(currentNum + 1)) {
      currentStreak++;
      currentNum++;
    }
    longest = Math.max(longest, currentStreak);
  }
}

console.log(longest);
