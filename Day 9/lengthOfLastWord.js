var lengthOfLastWord = function (s) {
  // 1st approach
  let words = s.trim().split(" ");
  return words[words.length - 1].length;

  // 2nd approach
  return s.trim().split(" ").at(-1).length;
};
