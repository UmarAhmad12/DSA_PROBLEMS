/*
Question 7

Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"

Output: true

Explanation:

Both s and t become "ac".

*/

function backspaceCompare(firstString, secondString) {
    let firstPointer = firstString.length - 1;
    let secondPointer = secondString.length - 1;

    let firstStringRemovals = 0;
    let secondStringRemovals = 0;

    while(firstPointer >= 0 || secondPointer >= 0) {
        if(firstString[firstPointer] === "#" || secondString[secondPointer] === "#") {
            if(firstString[firstPointer] === "#") {
                firstStringRemovals++;
                firstPointer--;
            }
            
            if(secondString[secondPointer] === "#") {
                secondStringRemovals++;
                secondPointer--;
            }

            continue;
        }

        if(firstStringRemovals || secondStringRemovals) {
            if(firstStringRemovals) {
                firstPointer--;
                firstStringRemovals--;
            }

            if(secondStringRemovals) {
                secondPointer--;
                secondStringRemovals--;
            }

            continue;
        }

        if(firstString[firstPointer] !== secondString[secondPointer]) {
            return false;
        }

        firstPointer--;
        secondPointer--;
    }

    return true;
}

let result = backspaceCompare("ab#c", "ad#c");
console.log(result);