/*
Question 4

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.

Input: s = "4(2(3)(1))(6(5))"

Output: [4,2,6,3,1,5]
*/


// Node class for the Tree
class Node
{
    constructor(data)
    {
        this.data=data;
        this.left = this.right = null;
    }
}
 
// static variable to point to the
// starting index of the string.
let start = 0;
 
// Construct Tree Function which accepts
// a string and return root of the tree;
function constructTree(s)
{
    // Check for null or empty string
    // and return null;
    if (s.length == 0 || s == null)
    {
        return null;
    }
      
    if (start >= s.length)
        return null;
      
    // Boolean variable to check
    // for negative numbers
    let neg = false;
      
    // Condition to check for negative number
    if (s[start] == '-')
    {
        neg = true;
        start++;
    }
      
    // This loop basically construct the
    // number from the continuous digits
    let num = 0;
    while (start < s.length && !isNaN(s[start] -
    parseInt(s[start])))
    {
        let digit = parseInt(
            s[start]);
        num = num * 10 + digit;
        start++;
    }
      
    // If string contains - minus sign
    // then append - to the number;
    if (neg)
        num = -num;
      
    // Create the node object i.e. root of
    // the tree with data = num;
    let node = new Node(num);
      
    if (start >= s.length)
    {
        return node;
    }
      
    // Check for open bracket and add the
    // data to the left subtree recursively
    if (start < s.length && s[start] == '(' )
    {
        start++;
        node.left = constructTree(s);
    }
      
    if (start < s.length && s[start] == ')')
    {
        start++;
        return node;
    }
      
    // Check for open bracket and add the data
    // to the right subtree recursively
    if (start < s.length && s[start] == '(')
    {
        start++;
        node.right = constructTree(s);
    }
      
    if (start < s.length && s[start] == ')')
    {
        start++;
        return node;
    }
    return node;
}
 
// Print tree function
function printTree(node)
{
    if (node == null)
        return;
    
    console.log(node.data + " ");
    printTree(node.left);
    printTree(node.right);
}
 
// Driver Code
// Input
let s = "4(2(3)(1))(6(5))";
 
// Call the function construct tree
// to create the tree pass the string;
let root = constructTree(s);
 
// Function to print preorder of the tree
printTree(root);
