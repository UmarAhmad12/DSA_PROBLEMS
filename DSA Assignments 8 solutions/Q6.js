/*
Question 6

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "cbaebabacd", p = "abc"

Output: [0,6]

Explanation:

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".

*/

function findAnagrams(s, p) {
    const ansArr = [];
    const hash = {};
    for(let i = 0; i < p.length; i++) {
        hash[p[i]] = (hash[p[i]] ?? 0) + 1;
    };

    let l = 0;
    let r = 0;
    while(r < s.length) {
        if(hash[s[r]] > 0) {
            hash[s[r]]--;
            if(r - l + 1 === p.length) ansArr.push(l);
            r++;
        } else {
            if(hash[s[l]] !== undefined) hash[s[l]]++;
            l++;
            if(l > r) r = l;
        }
    }

    return ansArr;
};

let result = findAnagrams("cbaebabacd", "abc");
console.log(result);