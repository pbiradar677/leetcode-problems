var isValid = function (s) {
  if (s.length < 1 || s.length % 2 == 1) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (!stack.length) return false;
      let lastChar = stack.pop();
      if (
        (char === ")" && lastChar !== "(") ||
        (char === "}" && lastChar !== "{") ||
        (char === "]" && lastChar !== "[")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
