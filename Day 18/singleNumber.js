/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1st approach

  // let res = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   res = res ^ nums[i];
  // }
  // return res;

  //2nd approach
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length; i = i + 2) {
  //   // <!-- if next el same than is check 2 next element -->
  //   if (nums[i] !== nums[i + 1]) {
  //     return nums[i];
  //   }
  // }

  // 3rd approach
  let hash = new Map();
  for (let i of nums) {
    if (hash.has(i)) {
      hash.delete(i);
    } else {
      hash.set(i, i);
    }
  }
  return hash.keys().next().value;
};

// Example 1:
// Input:
let nums1 = [2, 2, 1];
// Output: 1
console.log("example 1 ", singleNumber(nums1));

// Example 2:
// Input: 1
let nums2 = [4, 1, 2, 1, 2];
// Output:
console.log("example 2 ", singleNumber(nums2));

// Example 3:
// Input:
let nums3 = [1];
// Output: 1
console.log("example 3 ", singleNumber(nums3));
