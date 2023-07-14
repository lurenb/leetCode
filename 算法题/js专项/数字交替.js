const n = "886996";
var alternateDigitSum = function (n) {
  const arr = n.split("").map(Number);
  const res = arr.reduce((sum, val, index) => {
    return index % 2 === 0 ? sum + val : sum - val;
  });
  return res;
};
alternateDigitSum(n);
