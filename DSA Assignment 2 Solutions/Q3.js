/*
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/

// OPTIMIZATION
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function findLHS(nums) {
    const hashmap = {};
    let output = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (!hashmap[nums[i]]) hashmap[nums[i]] = 0;
        hashmap[nums[i]]++;
        
        const subsequences1 = hashmap[nums[i] - 1] ? hashmap[nums[i]] + hashmap[nums[i] - 1] : 0;
        const subsequences2 = hashmap[nums[i] + 1] ? hashmap[nums[i]] + hashmap[nums[i] + 1] : 0;
        output = Math.max(output, subsequences1, subsequences2);
    }
    
    return output;
};

const results = findLHS([1,3,2,2,5,2,3,7]);
console.log(results);