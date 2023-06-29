/*
Question 8

An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

Example 1:

Input: changed = [1,3,4,2,6,8]

Output: [1,3,4]

Explanation: One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].


*/



function findOriginalArray(changed) {
    
    const n = changed.length
    if(n%2 === 1) return []
    
    let original = []
    let map = new Map()
    
    changed.sort((a,b) => {
        return a-b
    })
    
    for(let ele of changed) {
        const half = ele/2
        if(map.has(half) && map.get(half) > 0) {
            original.push(half)
            map.set(half, map.get(half)-1)
        } else {
            map.set(ele, map.has(ele) ? map.get(ele)+1: 1)
        }
    }
    
    if(original.length !== n/2) return []
    
    return original
};

const result = findOriginalArray([1,3,4,2,6,8]);
console.log(result);