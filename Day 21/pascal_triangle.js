/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generatePascalTriangle = function (numRows) {
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let temp = [0, ...result.at(-1), 0];
    let row = [];
    for (let j = 0; j <= result.at(-1).length; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }
  return result;
};

console.log("Pascal triangle :", generatePascalTriangle(5));