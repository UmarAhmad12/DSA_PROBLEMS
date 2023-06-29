/*
Question 8

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3

Output: [2,3,5,4,1,7]

Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

*/

function shuffle(nums, n) {
    let i = n - 1
    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10
        nums[j] |= nums[i]
        i--
    }
    
    i = 0
    for (let j = n; j < nums.length; j++) {
        const num1 = nums[j] & 1023
        const num2 = nums[j] >> 10
        nums[i] = num1
        nums[i + 1] = num2
        i += 2    
    }
    
    return nums
};

const result = shuffle([2,5,1,3,4,7], 3);
console.log(result);