/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, curr) => {
    let key = fn(curr);
    if (!acc[key]) acc[key] = [curr];
    else acc[key].push(curr);
    return acc;
  }, {});
};
const fn = function (item) {
  return item.id;
};

let res = [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(fn); // {"1":[1],"2":[2],"3":[3]}
console.log(res);
