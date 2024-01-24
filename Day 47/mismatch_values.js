// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1st approach
// var findErrorNums = function (nums) {
//   let dup = -1,
//     missing = -1;
//   for (let i = 1; i <= nums.length; i++) {
//     let count = nums.filter((num) => num === i).length;
//     if (count === 2) {
//       dup = i;
//     } else if (count === 0) {
//       missing = i;
//     }
//   }

//   return [dup, missing];
// };

// 2nd approach
var findErrorNums = function (nums) {
  const n = nums.length;
  const actual_sum = (n * (n + 1)) / 2;
  let array_sum = 0;
  let unique_sum = 0;
  const s = new Set();

  for (const a of nums) {
    array_sum += a;
    s.add(a);
  }
  for (const a of s) {
    unique_sum += a;
  }

  const missing = actual_sum - unique_sum;
  const duplicate = array_sum - unique_sum;

  return [duplicate, missing];
};
let nums = [1, 2, 2, 4];

console.log("result", findErrorNums(nums));
