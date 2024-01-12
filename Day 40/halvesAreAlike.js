/**
 * @param {string} s
 * @return {boolean}
 */

// 1st approach
var halvesAreAlike = function (s) {
  let vowels = "aeiouAEIOU";
  let vowelsCount = 0;
  const midIndex = s.length / 2;

  for (let i = 0; i < midIndex; i++) {
    const charA = s[i];
    const charB = s[midIndex + i];
    if (vowels.includes(charA)) vowelsCount++;
    if (vowels.includes(charB)) vowelsCount--;
  }

  return vowelsCount === 0;
};
// second approch
// var halvesAreAlike = function (s) {
//   let vowels = "aeiouAEIOU";
//   let mid = s.length / 2;
//   let firstHalfString = s.slice(0, mid);
//   let secondHalfString = s.slice(mid);
//   let isVowel = (char) => vowels.includes(char);
//   let count1 = firstHalfString.split("").filter(isVowel).length;
//   let count2 = secondHalfString.split("").filter(isVowel).length;
//   return count1 === count2;
// };

let isHalvesAreAlike1 = halvesAreAlike("book");
console.log("isHalvesAreAlike ", isHalvesAreAlike1); //true
let isHalvesAreAlike2 = halvesAreAlike("parshuram");
console.log("isHalvesAreAlike ", isHalvesAreAlike2); //false
