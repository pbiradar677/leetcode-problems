var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length;
  // 1st approach
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  // 2nd approach
  //   while (l < r) {
  //       let mid = l + Math.floor((r - l) / 2);
  //       if (target > nums[mid]) l = mid + 1;
  //       else r = mid;
  //   }
  return l;
};
