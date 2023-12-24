/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

const log = debounce(console.log, 2000);
log("Hello 1"); // cancelled
log("Hello 2"); // cancelled
log("Hello 3"); // Logged at t=100ms
