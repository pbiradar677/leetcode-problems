//1347) Minium number of  steps to make two strings anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 1st approach
var minSteps = function (s, t) {
  let count = new Array(26).fill(0);
  let BASE = 97;
  // Storing the difference of frequencies of characters in t and s.
  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt() - BASE]++;
    count[t[i].charCodeAt() - BASE]--;
  }

  let ans = 0;
  // Adding the difference where string t has more instances than s.
  // Ignoring where t has fewer instances as they are redundant and
  // can be covered by the first case.
  for (let i = 0; i < 26; i++) {
    if (count[i] > 0) ans += count[i];
  }

  return ans;
};
// 2nd approach 
var minSteps = function (s, t) {
  let temp = t;
  for (let i = 0; i < s.length; i++) {
    if (temp.includes(s[i])) {
      temp = temp.replace(s[i], "");
    }
  }
  return temp.length;
};
console.log("min steps: " + minSteps("leetcode", "practice"));
