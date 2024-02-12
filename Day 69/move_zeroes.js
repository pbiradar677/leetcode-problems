// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let newArr = nums.filter((num) => num != 0);
  newArr = [...newArr, ...new Array(nums.length - newArr.length).fill(0)];
  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArr[i];
  }
  return nums;
};
var moveZeroesWithoutBuiltInFunctions = function (nums) {
  for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[index] === 0) {
      // insert zero at the end
      nums.push(0);
      //remove zero at the matching index
      nums.splice(index, 1);
    }
  }
  return nums;
};
var moveZeroesUsingSwap = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12];

console.time("moveZeroes");
console.log("moveZeroes result : ", moveZeroes(nums));
console.timeEnd("moveZeroes");
console.time("moveZeroesWithoutBuiltInFunctions");
console.log(
  "moveZeroesWithoutBuiltInFunctions result : ",
  moveZeroesWithoutBuiltInFunctions(nums)
);
console.timeEnd("moveZeroesWithoutBuiltInFunctions");
console.time("moveZeroesUsingSwap");
console.log("moveZeroesUsingSwap result : ", moveZeroesUsingSwap(nums));
console.timeEnd("moveZeroesUsingSwap");
