// 1481. Least Number of Unique Integers after K Removals

// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => a[1] - b[1]);

  for (let [num, freq] of sortedFreq) {
    if (k >= freq) {
      k -= freq;
      freqMap.delete(num);
    } else {
      break;
    }
  }
  return freqMap.size;
};

const arr = [4, 3, 1, 1, 3, 3, 2],
  k = 3;
console.log("findLeastNumOfUniqueInts : ", findLeastNumOfUniqueInts(arr, k));
// Output: 2
