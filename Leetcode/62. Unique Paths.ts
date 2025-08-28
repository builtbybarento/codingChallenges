// 62. Unique Paths - Medium 

// Description:

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down
 

// Constraints:

// 1 <= m, n <= 100

// Solution:

function uniquePaths(m: number, n: number): number {
    const matrix: number[][] = new Array(m).fill(null).map(()=> new Array(n).fill(0))
    matrix[0][0] = 1 
    for (let i=0; i<m; i++){
        for (let j=0; j<n; j++){
            matrix[i][j] += (i>0 ? matrix[i-1][j] : 0) + (j>0 ? matrix[i][j-1] : 0)
        }
    }
    return matrix[m-1][n-1]
};
//grid is m x n, with the robot starting in the top left and eventually moving to the bottom right
//so eventually x = m-1 and y = n-1 or whatever, starting 0,0
//find the amount of unique paths. 
//maybe start by finding the amount of paths that will lead to each spot
// say 3x3  [1,0,0]     [1,1,1] 
//          [0,0,0]     [1,2,3]  just going left to right from the top ? the answer was actually 6 ? 
//          [0.0.0]     [1.3.6] //so check top and left


//Better solution with linear space:

function uniquePaths2(m: number, n: number): number {
    let last = new Array(n).fill(1)

    while (m>1){
        m--
        for (let i=1; i<n; i++){
            last[i] += last[i-1]
        }
    }
    return last[n-1]
};