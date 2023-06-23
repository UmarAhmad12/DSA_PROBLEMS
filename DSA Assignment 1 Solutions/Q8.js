/*
Q8.You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
*/

// OPTIMIZATION
// TIME COMPLEXITY : O(n)
// SPACE COMPLEXITY: O(n) if not found any duplicates it will run n times.

function fundDuplicateAndMissingNums(nums) {
    let count = {}
    let missing;
    let duplicate;

    for( let num of nums) {
        if(count[num]){
            duplicate = num;
        } else {
            count[num] = 1;
        }
    }
    for (let i = 1; i<=nums.length; i++){
        if(!count[i]){
            missing = i;
            break;
        }
    }
    return [duplicate, missing];
}
const results = fundDuplicateAndMissingNums([1, 2, 2, 4])
console.log(results);

