// 22. Generate Parentheses - Medium 

// Description:

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

// Solution:

function generateParenthesis(n: number): string[] {
    let ans: string[] = []
    function recurse(input:string, left:number, right:number){
        if (left===n) ans.push(input+')'.repeat(2*n-input.length))//close the brackets
        else{
            recurse(input+'(', left+1, right)//will eventually return '(((', count=3
            if(left>right) recurse(input+')', left, right+1)
        }
    }
    recurse('(', 1, 0)
    return ans
};

//given a number n 
//generate all possible parentheses 
//ie ((())) (()()) (())() ()(()) ()()()

//lllrrr llrlrr llrrlr lrllrr lrlrlr
//can make any combination where there are always more or equal left and right
//1 - ()
//2 - (()) llrr or lrlr ()()
//3 - lllrrr llrlrr llrrlr lrlrr lrlrlr

//start with 3 lefts, 3 rights
//next 2 left, 1 right
//next 1 left, 1 right
//recursive? loops? 
//brute force check every combination and loop to make sure its ok
//far side is always L and R. 
//say recursive. if input.length<3 return funct(input+'L') and funct(input+'L'+'R')
//if fucntion contains 3 L's return input+R.repeat(n*2-input.length)

