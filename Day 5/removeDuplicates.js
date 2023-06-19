
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let ans = 1;
  for (let i = 1; i < nums.length; ++i)
    if (nums[i] != nums[i - 1]) {
      nums[ans] = nums[i];
      ++ans;
    }
  return ans;
};
