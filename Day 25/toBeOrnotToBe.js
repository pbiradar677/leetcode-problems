/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const throwError = (errMsg) => {
    throw new Error(errMsg);
  };
  return {
    toBe: (y) => val === y || throwError("Not Equal"),
    notToBe: (y) => val !== y || throwError("Equal"),
  };
};
console.log("Equal : ", expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
