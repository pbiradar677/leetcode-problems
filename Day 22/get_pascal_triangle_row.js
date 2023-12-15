/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getPascalTriangleRow = function (rowIndex) {
  let result = [[1]];
  if (rowIndex == 0) return result[rowIndex];
  for (let i = 1; i <= rowIndex; i++) {
    let temp = [0, ...result.at(-1), 0];
    let row = [];
    for (let j = 0; j <= result.at(-1).length; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    result.push(row);
  }
  return result[rowIndex];
};

console.log("Pascal triangle row :", getPascalTriangleRow(4));
