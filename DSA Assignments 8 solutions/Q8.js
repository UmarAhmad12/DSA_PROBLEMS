/*
Question 8

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:

Input: s = "ab", goal = "ba"

Output: true

Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

*/

function buddyStrings(s, goal) {
    let differCount = 0, s1 = '', s2 = '';
    if (s.length > 1 && s.length === goal.length) {
        for (let i = 0; i < s.length; i++) {
            // check if elements are the same
            if (s[i] !== goal[i]) {
                differCount++;
                if (differCount > 2) return false;
                s1 = s1 + s[i], s2 = goal[i] + s2;
            } 
        }
        if (differCount === 0) {
            if (new Set(s).size < s.length) return true; // when s === goal
        } else if (s1 === s2) return true; // when s !== goal
    }
    return false;
};

let result = buddyStrings("ab", "ba");
console.log(result);