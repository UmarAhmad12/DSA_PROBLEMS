/*
Question 2

Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

function fourSum(nums, target) {
    let solutionArrays = [];
    //sort the array
    sortedNums = nums.sort((a, b) => a - b);
    // loop through the array (excluding the last entries)
    for (let i=0; i<sortedNums.length -3; i++){
        // check if this is the same number as the last one
        if (i>0 && sortedNums[i] == sortedNums[i-1])continue;
  
    // loop through the remaining numbers
    for (let j = i + 1; j<sortedNums.length-2; j++) {
        // check if this is the same number as the last one
        if (j>i+1 && sortedNums[j] == sortedNums[j-1])continue;
  
    // establish a window fro the next number to the end of the array
    let left = j+1;
    let right = sortedNums.length-1;

    // run until the window is closed
    while(left < right){
        // add together the current numbers, and each side of the window
        const total =
            sortedNums[i]+
            sortedNums[j]+
            sortedNums[left]+
            sortedNums[right];

            // if we've reqched an answer, add it to the array of answers
            if (total == target){
                solutionArrays.push([
                    sortedNums[i],
                    sortedNums[j],
                    sortedNums[left],
                    sortedNums[right],
                ]);

                // move the left-hand edge of the window to the right until it reaches a diff number
                do {
                    left++;
                } while (sortedNums[left] == sortedNums[left - 1]);
                // move the right-hand edge of the window to the right until it reaches a diff number
                do {
                    right--;
                } while (sortedNums[right] == sortedNums[right + 1]);
            } else if (total<target){
                left++;
            } else {
                right--;
            }
        }
    }
 }
    return solutionArrays;
};

const results = fourSum([1,0,-1,0,-2,2], 0);
console.log(results);