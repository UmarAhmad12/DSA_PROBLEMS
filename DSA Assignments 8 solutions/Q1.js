/*
Question 1

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal.

Example 1:

Input: s1 = "sea", s2 = "eat"

Output: 231

Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

*/

function minimumDeleteSum(s1, s2) {
    let dp = Array(s2.length+1).fill();
    let iSum = 0;
    
    for (let i = 0; i <= s1.length; i++) {
        let dpNext = [];
        let jSum = 0;
        
        if (i !== 0) {
            iSum += s1[i-1].charCodeAt();
        }
        
        for (let j = 0; j <= s2.length; j++) {
            if (j !== 0) {
                jSum += s2[j-1].charCodeAt();
            }
            
            if (i == 0 || j == 0) {
                dpNext[j] = iSum + jSum;
            }
            
            else if (s1[i-1] == s2[j-1]) {
                dpNext[j] = dp[j-1];
            }
            
            else {
                dpNext[j] = Math.min(dpNext[j-1] + s2[j-1].charCodeAt(), dp[j] + s1[i-1].charCodeAt());
            }
        }
        
        dp = dpNext;
    }
    
    return dp.pop();
};

let result = minimumDeleteSum("sea", "eat");
console.log(result);