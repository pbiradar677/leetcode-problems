/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let num = init;
  return {
    increment: () => ++num,
    decrement: () => --num,
    reset: () => (num = init),
  };
};

const counter = createCounter(5);
console.log("increment : " + counter.increment()); // 6
console.log("reset : " + counter.reset()); // 5
console.log("decrement : " + counter.decrement()); // 4
