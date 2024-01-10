/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  const res = [];
  function helper(arr, depth) {
    for (const ele of arr) {
      if (Array.isArray(ele) && depth < n) {
        helper(ele, depth + 1);
      } else {
        res.push(ele);
      }
    }
    return res;
  }
  return helper(arr, 0);
};
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 1;
console.log(flat(arr, n));
