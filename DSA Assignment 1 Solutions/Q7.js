/*
Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

// OPTIMIZATION 
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function arrangeNonzerosAndzeros (nums1) {
    let startArrIndex = 0;

    for( let i = 0; i < nums1.length; i++){
        if (nums1[i] !== 0) {
            nums1[startArrIndex] = nums1[i];
            startArrIndex++;
        }
    }
    while (startArrIndex < nums1.length) {
        nums1[startArrIndex] = 0;
        startArrIndex++;
    }
}

let nums1 = [0, 1, 0, 3, 12]
arrangeNonzerosAndzeros(nums1)
console.log(nums1);