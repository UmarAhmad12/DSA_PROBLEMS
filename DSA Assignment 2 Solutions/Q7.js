/*
Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/

// OPTIMIZATION
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function isMonotonic(nums) {
    // Keeps a running score of if the next index has increased or decreased.
    let incereaseCount = 0;
    let decreaseCount = 0;

    for(let i = 0; i<nums.length; i++){
       if(nums[i + 1] !== undefined && nums[i+1] >= nums[i]) incereaseCount++
        if(nums[i + 1] !== undefined && nums[i+1] <= nums[i]) decreaseCount++
    }
    // The size of the array will always be +1 because the last element can't be
    // compared the the next element that doesn't exist outside of the array, in other
    // words a number can't be compared against an undefined.
    return incereaseCount === nums.length -1 || decreaseCount === nums.length -1
};

let results = isMonotonic([1,2,2,3]);
console.log(results);