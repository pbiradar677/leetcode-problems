/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {};

  for (let char of s) {
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) return i;
  }

  return -1;
};

const s1 = "leetcode";
const s2 = "loveleetcode";
console.log("result s1 = ", firstUniqChar(s1));
console.log("result s2 = ", firstUniqChar(s2));
