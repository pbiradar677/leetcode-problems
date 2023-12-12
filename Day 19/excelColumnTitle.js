/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let cname = "";
  let n = columnNumber;
  while (n) {
    let c = 65 + ((n - 1) % 26);
    cname = String.fromCharCode(c) + cname;
    n = Math.floor((n - 1) / 26);
  }
  return cname;
};

console.log('column Name 1: ' + convertToTitle(1));
console.log('column Name 28: ' + convertToTitle(28));
console.log('column Name 702: ' + convertToTitle(701));