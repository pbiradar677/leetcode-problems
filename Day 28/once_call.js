/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isOnce = true;
  return function (...args) {
    if (isOnce) {
      isOnce = false;
      return fn(...args);
    }
    return;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log("first call : ", onceFn(1, 2, 3)); // 6
console.log("second call : ", onceFn(2, 3, 6)); // returns undefined without calling fn
