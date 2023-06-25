/*
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6
*/

// OPTIMIZATION
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function maximumProduct(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min2 = Infinity;
    let min1 = Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max1) {
        [max1, max2, max3] = [nums[i], max1, max2];
      } else if (nums[i] > max2) {
        [max2, max3] = [nums[i], max2];
      } else if (nums[i] > max3) {
        max3 = nums[i];
      }
      if (nums[i] < min1) {
        [min2, min1] = [min1, nums[i]];
      } else if (nums[i] < min2) {
        min2 = nums[i];
      }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  };
 
  let results = maximumProduct([1,2,3]);
  console.log(results);