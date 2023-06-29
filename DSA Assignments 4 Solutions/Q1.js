/*
Question 1
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

Explanation: Only 1 and 5 appeared in the three arrays.

*/

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,5,7,9];
const arr3 = [1,3,4,5,8];
const intersectThree = (arr1 = [], arr2 = [], arr3 = []) => {
   let curr1 = 0;
   let curr2 = 0;
   let curr3 = 0;
   const res = [];
   while((curr1 < arr1.length) && (curr2 < arr2.length) && (curr3 < arr3.length)){
      if((arr1[curr1] === arr2[curr2]) && (arr2[curr2] === arr3[curr3])){
         res.push(arr1[curr1]);
         curr1++;
         curr2++;
         curr3++;
      }
      const max = Math.max(arr1[curr1], arr2[curr2], arr3[curr3]);
      if(arr1[curr1] < max){
         curr1++;
      };
      if(arr2[curr2] < max){
         curr2++;
      };
      if(arr3[curr3] < max){
         curr3++;
      };
   };
   return res;
};
console.log(intersectThree(arr1, arr2, arr3));
