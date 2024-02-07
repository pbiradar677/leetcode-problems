// 451. Sort Characters By Frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let res = {};
  for (let char of s) {
    res[char] = (res[char] || 0) + 1;
  }
  let sorted = Object.entries(res).sort((a, b) => b[1] - a[1]);
  let str = "";
  for (let [key, value] of sorted) {
    str += key.repeat(value);
  }
  return str;
};

const s = "tree";
console.log("result :", frequencySort(s));
// Output: "eert"
