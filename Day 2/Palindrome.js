var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let xStr = x.toString();
  return xStr === xStr.split("").reverse().join("");
};
