/*
Question 6

Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]

Output:

[2,3]

*/

function findDuplicates(nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let markerIndex = Math.abs(nums[i]) - 1
        if (nums[markerIndex] < 0) {
            result.push(markerIndex + 1)
        } else {

            nums[markerIndex] = nums[markerIndex] * -1
        }
    }

    return result
};

const result = findDuplicates([4,3,2,7,8,2,3,1]);
console.log(result);
