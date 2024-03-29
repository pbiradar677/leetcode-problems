// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // create a empty object to store grouped words
  let res = {};
  // iterate over str array of strings
  for (let str of strs) {
    // sort str string in ascending order
    let s = str.split("").sort().join("");
    //check s as a key present in the res object
    if (!res[s]) {
      // if not present in the res object then assign a empty arr to res[s]
      res[s] = [];
    }
    // push the str in the res[s] array
    res[s].push(str);
  }
  // get a res object values and reverse it
  return Object.values(res).reverse();
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log("grouped anagrams : ", groupAnagrams(strs));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
