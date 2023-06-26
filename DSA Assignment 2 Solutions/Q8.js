/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.
*/

// Time Complexity --> O(n)
// Space Complexity --> O(1)

function findMinScore(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;

    // Find the minimum and maximum numbers in the array
    for (let i = 0; i < nums.length; i++){
        minNum = Math.min(minNum, nums[i]);
        maxNum = Math.max(maxNum, nums[i]);
    }

    let minScore = maxNum - minNum;

    // Iterate over each element in the array
    for(let i = 0; i < nums.length; i++) {
        const diff = maxNum - nums[i];

        if (diff <= k) {
            const newMax = Math.max(nums[i] + k, maxNum);
            const newMin = Math.min(nums[i] + k, minNum);
            minScore = Math.min(minScore, newMax - newMin);
        }
    }
    return minScore;
}

let results = findMinScore([1], 0);
console.log(results);