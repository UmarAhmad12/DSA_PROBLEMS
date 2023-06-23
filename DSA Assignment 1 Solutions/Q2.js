/*
Q2. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

- Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
- Return k.

Example :
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_*,_*]

Explanation:Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)
*/

// OPTIMIZATION
// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)

let count = 0;
function removeTargetValue(nums){
    let val = 3;

// for(let i = 0; i<nums.length; i++){ it affect the indices that is why we loop in reverse order.

for ( let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
        nums.splice(i, 1);
        count++;
    }
}
return nums;
}

const result = removeTargetValue([3, 2, 2, 3]);
console.log("Number of Element thar are removed : ", count)
console.log("Modified nums array : ", result)