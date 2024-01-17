// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurance = {};
  for (let value of arr) {
    if (!occurance[value]) {
      occurance[value] = 0;
    }
    occurance[value]++;
  }
  let newArr = Object.entries(occurance).map((item) => item[1]);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) !== i) return false;
  }
  return true;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log("isUniqueOccurrences ", uniqueOccurrences(arr)); // true

let arr2 = [1, 2];
console.log("isUniqueOccurrences ", uniqueOccurrences(arr2)); // false
