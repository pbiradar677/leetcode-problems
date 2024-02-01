// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  let n = str1.length;
  let k = str2.length;

  let gcds = function (x, y) {
    if (!y) return x;
    return gcds(y, x % y);
  };
  let div = gcds(n, k);

  return str1.slice(0, div);
};

const str1 = "ABCABC",
  str2 = "ABC";
console.log("gcd of strings = ", gcdOfStrings(str1, str2));
// Output: "ABC"
