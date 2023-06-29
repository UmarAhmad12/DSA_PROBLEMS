/*
Question 4

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"

Output: "s'teL ekat edoCteeL tsetnoc"

*/

function reverseWords(s) {
    let words = s.split(' ');
    for (let w = 0; w < words.length; w++) {
        let letters = words[w].split('');
        for (let i = 0, j = letters.length - 1; i < j;) {
            [letters[i], letters[j]] = [letters[j], letters[i]];
            i++;
            j--;
        }
        words[w] = letters.join('')
    }
    return words.join(' ')
};

let result = reverseWords("Let's take LeetCode contest");
console.log(result);