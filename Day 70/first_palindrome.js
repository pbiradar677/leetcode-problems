// 2108. Find First Palindromic String in the Array

// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.

/**
 * @param {string[]} words
 * @return {string}
 */
// 1st approch
// var firstPalindrome = function (words) {
//   for (let w of words) {
//     if (isPalindrome(w)) return w;
//   }
//   return "";
// };

// function isPalindrome(word) {
//   let left = 0;
//   let right = word.length - 1;
//   while (left < right) {
//     if (word[left++] !== word[right--]) return false;
//   }
//   return true;
// }

var firstPalindrome = function (words) {
  for (let w of words) {
    let reversedWord = w.split("").reverse().join("");
    if (w === reversedWord) return w;
  }
  return "";
};
const words = ["abc", "car", "ada", "racecar", "cool"];

console.log("First Palindrome : ", firstPalindrome(words));
