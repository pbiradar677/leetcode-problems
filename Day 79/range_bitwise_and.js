// 201. Bitwise AND of Numbers Range

// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

// Example 1:
// Input: left = 5, right = 7
// Output: 4

// Example 2:
// Input: left = 0, right = 0
// Output: 0

// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  // Calculate the common leftmost bits between left and right
  let shift = 0;
  while (left < right) {
    // Right shift both left and right to find common bits
    left >>= 1;
    right >>= 1;
    shift++;
  }
  // Left shift the common bits to the original position
  return left << shift;
};

const left = 5,
  right = 7;
console.log("range bitwise and :", rangeBitwiseAnd(left, right));
// Output: 4
