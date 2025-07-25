// 8. String to Integer (atoi) - MediaKeyStatusMap

// Description:

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

 

// Example 1:

// Input: s = "42"

// Output: 42

// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:

// Input: s = " -042"

// Output: -42

// Explanation:

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:

// Input: s = "1337c0d3"

// Output: 1337

// Explanation:

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:

// Input: s = "0-1"

// Output: 0

// Explanation:

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:

// Input: s = "words and 987"

// Output: 0

// Explanation:

// Reading stops at the first non-digit character 'w'.

 

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

// Solution:

function myAtoi(s: string): number {
    let left = 0
    let right = 0
    const nums ='1234567890'
    let lead = true
    for (let i=0; i<s.length; i++){
        if (s[i]===' ' && lead){
            left++
            right++
        }else if (s[i]==='-' && lead){
            right++
            lead=false
        }else if (s[i]==='+' && lead){
            left++ 
            right++
            lead=false
        }else if (nums.includes(s[i])){
            right++
            lead=false
        }else break
    }
    const ans = Number(s.slice(left,right))
    
    return !ans ? 0 : ans<-1*2**31 ? -1*2**31 : ans>2**31-1? 2**31-1 : ans
};

//Alternatively: 

function myAtoi2(s: string): number {
    let nums = {'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'0':0}
    let neg = 1
    let num = 0
    let first = true
    for(let i=0; i<s.length; i++){
        console.log(s[i])
        if (s[i]===" " && first) continue
        if (s[i]==="-" && first && (i===0 || s[i-1]===' ')){
            neg=-1
            first = false
        } 
        else if (s[i]==="+" && first && (i===0 || s[i-1]===' ')){
            first = false
        }else if (s[i] in nums) {
            first = false
            num = num*10+nums[s[i]]
        }else break
    }return num*neg<-1*2**31 ? -1*2**31
        :num*neg>2**31-1 ? 2**31-1
        :num*neg
}