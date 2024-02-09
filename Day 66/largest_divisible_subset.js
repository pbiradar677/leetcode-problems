// 368. Largest Divisible Subset

// Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

// answer[i] % answer[j] == 0, or
// answer[j] % answer[i] == 0
// If there are multiple solutions, return any of them.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,2]
// Explanation: [1,3] is also accepted.
// Example 2:

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  const n = nums.length;

  // Edge case: if there are less than or equal to one element, return the input array
  if (n <= 1) {
    return nums;
  }

  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  // Initialize arrays to store the length of the largest divisible subset ending at each index,
  // as well as the previous index of each element in the largest divisible subset
  const dp = new Array(n).fill(1);
  const prev = new Array(n).fill(-1);

  // Initialize a variable to keep track of the index of the element with the largest divisible subset
  let maxIndex = 0;

  // Loop through each element in the input array
  for (let i = 1; i < n; ++i) {
    // Loop through each element before the current element
    for (let j = 0; j < i; ++j) {
      // Check if the current element is divisible by the previous element
      // and if adding the current element to the subset would result in a larger subset
      if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
        // Update the length of the largest divisible subset ending at the current index
        dp[i] = dp[j] + 1;
        // Update the previous index of the current element in the largest divisible subset
        prev[i] = j;
      }
    }

    // Update the index of the element with the largest divisible subset if necessary
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  // Reconstruct the largest divisible subset using the previous indices
  const result = [];
  while (maxIndex !== -1) {
    result.push(nums[maxIndex]);
    maxIndex = prev[maxIndex];
  }

  // Return the largest divisible subset in reversed order
  return result.reverse();
};

const nums = [1, 2, 3];
console.log("largestDivisibleSubset : ", largestDivisibleSubset(nums));
