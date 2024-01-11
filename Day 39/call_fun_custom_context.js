/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  Object.defineProperty(context, "fn", {
    value: this,
    enumerable: false, // default false
  });
  return context.fn(...args);
};

function increment() {
  this.count++;
  return this.count;
}
// call a function with callPolyfill
let result = increment.callPolyfill({ count: 10 });

console.log(result); // 2
