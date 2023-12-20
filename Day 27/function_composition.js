/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, curr) => {
      return curr(acc);
    }, x);
  };
};

const fn1 = compose([(x) => x + 1, (x) => 2 * x]);
console.log("fun1: " + fn1(4)); //9;

const fn2 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log("fun2: " + fn2(4)); //65
