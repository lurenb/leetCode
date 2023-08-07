var merge = function (intervals) {
  //先按照 preStar排个序算了
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 1; i < intervals.length; i++) {
    let preStar = intervals[i - 1][0];
    let preEnd = intervals[i - 1][1];
    let curStar = intervals[i][0];
    let curEnd = intervals[i][1];
    if (curStar <= preEnd) {
      intervals[i][0] = preStar;
      intervals[i][1] = Math.max(curEnd, preEnd);
      intervals.splice(i - 1, 1);
      i--;
    }
  }
  return intervals;
};
const arr = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10],
];
arr.sort((a, b) => {
  return a[0] - b[0];
});
// console.log(arr);
console.log(merge(arr));
