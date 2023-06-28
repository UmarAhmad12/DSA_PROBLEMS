/*
Question 4

Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
*/

function searchInsert(nums, target) {
    let start = 0;
    let end = nums.length-1;
    if (target < nums[0]) {
        return 0
    } else if (target > nums[end]) {
        return end + 1
    }
    while(start<= end){
        let mid = Math.floor((start+end)/2)
        if(target < nums[mid]){
            end = mid-1
        }else if(target>nums[mid]){
            start = mid + 1;
        }else{
            return mid
        }
    }
    return start
};

const results = searchInsert([1,3,5,6], 5);
console.log(results);