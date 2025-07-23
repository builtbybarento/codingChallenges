// 1717. Maximum Score From Removing Substrings - Medium 

// Description:

// You are given a string s and two integers x and y. You can perform two types of operations any number of times.

// Remove substring "ab" and gain x points.
// For example, when removing "ab" from "cabxbae" it becomes "cxbae".
// Remove substring "ba" and gain y points.
// For example, when removing "ba" from "cabxbae" it becomes "cabxe".
// Return the maximum points you can gain after applying the above operations on s.

 

// Example 1:

// Input: s = "cdbcbbaaabab", x = 4, y = 5
// Output: 19
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
// Total score = 5 + 4 + 5 + 5 = 19.
// Example 2:

// Input: s = "aabbaaxybbaabb", x = 5, y = 4
// Output: 20
 

// Constraints:

// 1 <= s.length <= 105
// 1 <= x, y <= 104
// s consists of lowercase English letters.

// Solution:

function maximumGain(s: string, x: number, y: number): number {
    let score = 0
    function check(a, b, x, y){
        let stack = []
        for(let i=0; i<s.length; i++){
            if (stack.length===0 || !(stack[stack.length-1]===a && s[i]===b)) stack.push(s[i])
            else {
                stack.pop()
                score += x
            }
        }
        s = stack.join('')
    }
    if (x>y){
        check('a','b',x,y)
        check('b','a',y,x)
    } 
    else{
        check('b','a',y,x)
        check('a','b',x,y)
    } 
    return score
};

//can remove 'ab' to get x points
//can remove 'ba' to get y points
//find the maximum amount of points to gain

//depending which operation gets more points just remove everything in that first then the second
