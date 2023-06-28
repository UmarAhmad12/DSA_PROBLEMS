/*
Question 6

Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1
*/

function singleNumber(nums) {
    if(nums.length<0){
        return 0
    }
    let num = 0 ;
    for (let i = 0; i<nums.length; i++ ){
        num^=nums[i]
    }
    return num
};

let result = singleNumber([2,2,1]);
console.log(result);