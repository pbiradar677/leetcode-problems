let arr = [1, 2, 3];
//basic approach
// Array.prototype.customForEach = function (callback) {
//   for (let index = 0; index < this.length; index++) {
//     callback(this[index], index, this);
//   }
// };

// check all edge cases
Array.prototype.customForEach = function (callback, thisContext) {
  if (typeof callback !== "function") {
    throw "except callback function";
  }
  for (let index = 0; index < this.length; index++) {
    if (this.hasOwnProperty(index)) {
      callback.call(thisContext, this[index], index, this);
    }
  }
};

arr.customForEach((item, index, array) => {
  console.log(index, item, array);
});

