let word1 = "abcd";
let word2 = "pq";

var mergeAlternately = function (word1, word2) {
  let res = "";
  let i = 0;
  while (i + 1) {
    if (!word1[i]) {
      res += word2.slice(i);
      return res;
    }
    if (!word2[i]) {
      res += word1.slice(i);
      return res;
    }
    res += word1[i];
    res += word2[i];
    i++;
  }
  return res;
};

console.log(mergeAlternately(word1, word2));
