/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // brute force
  // for(let i=0;i<nums.length-1;i++)
  // {
  //     for(let j=i+1;j<nums.length;j++)
  //     {

  //         if((nums[i]+nums[j])===target)
  //         {
  //             return [i,j]
  //         }
  //     }
  // }

  for (let i = 0; i < nums.length; i++) {
    let pairNum = target - nums[i];
    let indexOfNum = nums.indexOf(pairNum);
    if (indexOfNum !== -1 && indexOfNum !== i) {
      return [i, indexOfNum];
    }
  }
};
