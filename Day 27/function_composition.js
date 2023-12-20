/**
 * @param {Function[]} functions
 * @return {Function}
 */
// 1st approach
// var compose = function (functions) {
//   return function (x) {
//     return functions.reduceRight((acc, curr) => {
//       return curr(acc);
//     }, x);
//   };
// };

// 2nd approach
var compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const fn1 = compose([(x) => x + 1, (x) => 2 * x]);
console.log("fun1: " + fn1(4)); //9;

const fn2 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log("fun2: " + fn2(4)); //65
