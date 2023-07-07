/*
Question 5

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2

Output:

"bacdfeg"

*/

function  reverseStr(s, k) {
    s = s.split("")
    for (i = 0; i < s.length; i += 2 * k) {
        var j = Math.min(i + k - 1, s.length - 1)
        reverse(i, j)
    }
    return s.join("")
    function reverse(i, j) {
        while (i < j) {
            [s[i], s[j]] = [s[j], s[i]]
            i++
            j--
        }
    }
};

let result =  reverseStr("abcdefg", 2);
console.log(result);