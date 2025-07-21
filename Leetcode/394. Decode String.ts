// 394. Decode String - Medium  

// Description:

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

 

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
 

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// Solution:

function decodeString(s: string): string {
    let stack: string[] = []
    for (const l of s ){
        if(l!==']') stack.push(l)
        else{
            //console.log(stack)
            let str = ''
            while(stack[stack.length-1] != '['){
                str = stack.pop() + str
            }stack.pop() //remove the end bracket
            let num = ''
            //console.log(stack[stack.length-1].charCodeAt(0))
            while(stack[0] && stack[stack.length-1]!.charCodeAt(0)>=48 && stack[stack.length-1]!.charCodeAt(0)<=57){
                num = stack.pop() + num
            }//console.log (str, num)
            stack.push(str.repeat(Number(num)))
            //console.log(stack)
        }
    }
    return stack.join('')
};

//trying this again with a stack
//push to stack until ] is found
//create a string until [ is found
//create a number 
//repeat the string n times and push the whole thing to the stack as a whole string
//continue the stack. might get to another ] then do the same thing 
//this way the first closing, potentially nested component is expanded first