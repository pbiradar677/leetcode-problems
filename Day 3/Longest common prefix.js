
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) return "";

  strs.sort();

  // 1st approach
  // for (let i = 0; i < strs[0].length; i++) {
  //     if (strs[0][i] !== strs[strs.length - 1][i]) {
  //         return strs[0].substr(0, i)
  //     }
  // }
  // return strs[0]

  // 2nd approach

  let lcp = "";
  let firstWord = strs[0];
  let lastWord = strs[strs.length - 1];

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === lastWord[i]) lcp += firstWord[i];
    else return lcp;
  }
  return lcp;
};
