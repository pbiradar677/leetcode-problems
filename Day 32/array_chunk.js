/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
// 1st approach
// var chunk = function (arr, size) {
//   let res = [];
//   let chunk = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % size !== 0) {
//       chunk.push(arr[i]);
//     } else {
//       chunk = [arr[i]];
//       res.push(chunk);
//     }
//   }
//   return res;
// };
var chunk = function (arr, size) {
  let chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }
  return chunk;
};

let arr = [1, 2, 3, 4, 5];
console.log("Array chunk : ", chunk(arr, 1));
