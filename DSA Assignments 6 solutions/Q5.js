/*
Question 5

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

Example 1:

Input: s = "abcdefg", k = 2

Output:

"bacdfeg"

*/

function reverseStr(s, k) {
	let newStr = "";

	let i;
	for(i=2*k;i<s.length;i += 2*k) {
		for(let j=i-k-1;j>=i-(2*k);j--) {
			newStr += s[j]
		}
		for(let j=i-k;j<i;j++) {
			newStr += s[j]
		}
	}

	i = i - 2 * k;

	let j = s.length >= i + k ? i+k-1 : s.length - 1;
	while(j >= i){
		newStr += s[j]
		j--
	}

	i = i+k
	while(i < s.length){
		newStr += s[i]
		i++;
	}

	return newStr
};

let result = reverseStr("abcdefg", 2);
console.log(result);