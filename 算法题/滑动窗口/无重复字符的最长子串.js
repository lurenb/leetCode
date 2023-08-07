let s = "pwwkew";

const arr = Array.from(s);
const result = [];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  const index = result.indexOf(arr[i]);
  if (index !== -1) {
    result.splice(0, index + 1);
  }
  result.push(arr[i]);
  max = Math.max(max, result.length);
}
console.log(max);
