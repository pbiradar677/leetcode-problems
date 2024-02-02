// 1291. Sequential Digits

// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  let s = "123456789";
  let res = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let num = +s.slice(i, j + 1);
      if (num > high) break;
      if (low <= num) res.push(num);
    }
  }
  return res.sort((a, b) => a - b);
};

const low = 1000,
  high = 13000;
console.log("results : ", sequentialDigits(low, high));
// Output: [1234,2345,3456,4567,5678,6789,12345]
