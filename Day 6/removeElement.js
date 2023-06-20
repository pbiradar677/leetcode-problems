var removeElement = function(nums, val) {
    //1st approach
    // let ans = 0;
    // for (let i = 0; i < nums.length; i++)
    //   if (nums[i] !==val) {
    //     nums[ans++] = nums[i];
    //   }
    // return ans;

    //2nd approach
    while(nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length;
  };