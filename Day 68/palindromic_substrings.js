// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = s.length;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        count++;
      }
    }
  }
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s.charAt(left++) !== s.charAt(right--)) return false;
    }
    return true;
  }
  return count;
};

const s = "abc";

console.log("result: ", countSubstrings(s));
