var plusOne = function (digits) {
  // 1st approach
  // return (BigInt(digits.join("")) + BigInt(1)).toString().split("");

  // 2nd approach
  for (let i = digits.length - 1; i >= 0; i--) {
    let currDigit = digits[i];
    if (currDigit === 9) {
      digits[i] = 0;
    } else {
      digits[i] = currDigit + 1;
      break;
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};
