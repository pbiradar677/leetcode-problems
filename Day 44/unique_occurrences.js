// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 1st approach
// var uniqueOccurrences = function (arr) {
//   let occurance = {};
//   for (let value of arr) {
//     occurance[value] = (occurance[value] || 0) + 1;
//   }
//   let newArr = Object.values(occurance);

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr.indexOf(newArr[i]) !== i) return false;
//   }
//   return true;
// };
var uniqueOccurrences = function (arr) {
  let occurance = {};
  for (let value of arr) {
    occurance[value] = (occurance[value] || 0) + 1;
  }
  let newArr = new Set(Object.values(occurance));

  return newArr.size === Object.values(occurance).length;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log("isUniqueOccurrences ", uniqueOccurrences(arr)); // true

let arr2 = [1, 2];
console.log("isUniqueOccurrences ", uniqueOccurrences(arr2)); // false
