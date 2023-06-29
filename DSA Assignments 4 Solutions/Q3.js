/*
Question 3
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]

*/

 function transpose(a) {
    const  res = []
    for(let i  = 0 ; i <a[0].length ;i++){
        const d = []
        for(let j = 0 ; j < a.length ; j++){
            d.push(a[j][i])
        }
        res.push(d)
    }
    return res
};

const results = transpose( [[1,2,3],[4,5,6],[7,8,9]]);
console.log(results);