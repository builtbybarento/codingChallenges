// 118. Pascal's Triangle - Easy 

// Description:

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

// Solution:

function generate(numRows: number): number[][] {
    const ans: number[][] = [[1]]
    while (ans.length<numRows){
        const last: number[] = ans[ans.length-1]
        const newAns: number[] = []
        for (let i=0; i<=last.length; i++){
            newAns.push( (last[i-1]||0) + (last[i]||0) )
        }
        ans.push(newAns)
        
    }return ans
};
//just start with [1] and do n-1+n, up to n+1 and if n-1===undefined add 0 