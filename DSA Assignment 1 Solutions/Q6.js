/*
Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]

Output: true

*/

// OPTIMIZATION
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)

function checkDuplicateNums (nums1) {
    const frequency = {};

    for(i = 0; i < nums1.length; i++){
        const num = nums1[i];
        if (frequency[num]){
            return true; 
        } 
        frequency [num] = true; 
    }
    return false;
}

const nums1 = [1, 2, 3]
console.log(checkDuplicateNums(nums1));