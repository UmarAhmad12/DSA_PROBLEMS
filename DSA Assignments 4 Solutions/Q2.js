/*
Question 2

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]

Output: [[1,3],[4,6]]

Explanation:

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

*/

function findDifference (nums1, nums2) {
    let arr1=[];
    let arr2=[];
    for (let i = 0; i < nums1.length; i++) {
        let flag=true;
        for (let j = 0, k=i+1; j < nums2.length+nums1.length; j++,k++) {
            if(nums1[i]===nums2[j] || nums1[i]==nums1[k]){
                flag=false;
            }
        }
        if(flag){
            arr1.push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        let flag=true
        for (let j=0,k=i+1; j < nums1.length+nums2.length; j++,k++) {
            if(nums1[j]==nums2[i] || nums2[i]==nums2[k]){
                flag=false;
            }
        }
        if(flag===true){
            arr2.push(nums2[i])
        }
    }
    return [arr1,arr2]
};

const results = findDifference([1,2,3], [2,4,6]);
console.log(results);