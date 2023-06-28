/*
Question 1

Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

function threeSumClosest(nums, tar) {
    let closest=Infinity;
 nums= nums.sort((a,b)=> {return a-b})
 for (let i = 0; i < nums.length-2; i++) {
         let  a=i+1,b=nums.length-1;
         while(a<b){
                   let target =nums[i]+nums[a]+nums[b];  
                   if(Math.abs(target - tar) < Math.abs(closest - tar))closest=target;
                   (target<tar)? a++:b--               
         } 
 }
     return closest; 
 };

 let results = threeSumClosest([-1,2,1,-4], 1)
 console.log(results);