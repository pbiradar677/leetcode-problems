// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  // store count of every element
  let res = {};
  // loop over all elements
  for (let value of nums) {
    // check if element is already present in array and increment count by one
    res[value] = (res[value] || 0) + 1;
    // check if element count is greater than number of elements divided by two then return element
    if (res[value] > nums.length / 2) return value;
  }
};

// Example 1:

let nums1 = [3, 2, 3];
console.log("nums1: ", majorityElement(nums1));
// Output: 3

// Example 2:

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log("nums2: ", majorityElement(nums2));
// Output: 2
