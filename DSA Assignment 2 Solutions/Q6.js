/*
Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4
*/

// OPTIMIZATION
// TIME COMPLEXITY: O(logn)
// SPACE COMPLEXITY: O(1)

function searchTarget(nums, target) {
    let left = 0,
      right = nums.length - 1;
  
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (target < nums[middle]) {
        right = middle - 1;
      } else if (target > nums[middle]) {
        left = middle + 1;
      } else if (target === nums[middle]) {
        return middle;
      }
    }
    return -1;
  };

  let results = searchTarget([-1,0,3,5,9,12], 9)
  console.log(results)