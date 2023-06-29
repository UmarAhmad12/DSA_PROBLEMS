/*
Question 7
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

Example 1:

Input: m = 3, n = 3, ops = [[2,2],[3,3]]

Output: 4

Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

*/

function maxCount(m, n, ops) {
    if (!ops.length) return m*n;
    
    let currentX = ops[0][0];
    let currentY = ops[0][1];

    for (let i = 1; i < ops.length; i++) {
        if ((ops[i][0] >= currentX && ops[i][1] < currentY) || (ops[i][1] < currentY && ops[i][0] >= currentX)) {
            currentY = ops[i][1];
        }
        
        if ((ops[i][0] < currentX && ops[i][1] >= currentY) || (ops[i][1] >= currentY && ops[i][0] < currentX)) {
            currentX = ops[i][0];
        }
        
        if (ops[i][1] < currentY && ops[i][0] < currentX) {
            currentY = ops[i][1];
            currentX = ops[i][0];
        }
        
    }
    
    return currentX * currentY;
};

const results = maxCount(3, 3, [[2,2],[3,3]])
console.log(results);