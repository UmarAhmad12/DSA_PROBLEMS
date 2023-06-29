/*
Question 2

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:

Input: num = "69"

Output:

true

*/

// Time: O(n)
// Space: O(1)

function isStrobogrammatic(num) {
    if (num.length === 0) return true
    // 0
    // 1 
    // 1 1
    // 6 9
    // 9 6
    // 8 
    // 8 8
    // 0 0
  
    let i = 0
    let j = num.length - 1
    
    const strogoSingles = new Set(['0', '1','8'])
    const strogoPairs = new Set(['00', '11','69','96','88'])
    
    const isStrobo = (i, j) => {
      if (i === j) {
        return strogoSingles.has(num[i])
      }
      
      return strogoPairs.has(`${num[i]}${num[j]}`)
    }
  
    
    while (i <= j) {
      
      if (!isStrobo(i, j)) {
        return false
      }
      
      i += 1
      j -= 1
    }
  
    return true
};

let result = isStrobogrammatic("69");
console.log(result);