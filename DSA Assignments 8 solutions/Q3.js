/*
Question 3

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

Example 1:

Input: word1 = "sea", word2 = "eat"

Output: 2

Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

*/

function minDistance(text1, text2) {
    let arr = new Array(text1.length+1);
    for(let a = 0; a < arr.length; a++){
        arr[a] = new Array(text2.length + 1).fill(-1);
    }
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[0].length; j++){
            if(i == 0 || j == 0) arr[i][j] = 0;
        }
     }
    for(let i = 1; i< arr.length; i++){
        for(let j = 1; j< arr[0].length; j++){
            if(i == 0 || j == 0) return arr[i][j];
            if(text1[i-1] == text2[j-1]){
                arr[i][j] = 1 + arr[i -1][j -1];
            }else{
                arr[i][j] = Math.max(arr[i -1][j], arr[i][j -1]);
            }
        }
     }
    return (text1.length + text2.length) - (2 *arr[text1.length][text2.length]);
};

let result = minDistance("sea", "eat");
console.log(result);