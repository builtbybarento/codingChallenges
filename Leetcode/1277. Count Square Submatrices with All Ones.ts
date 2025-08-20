// 1277. Count Square Submatrices with All Ones - Medium 

// Description:

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

// Example 1:

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15
// Explanation: 
// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.
// Example 2:

// Input: matrix = 
// [
//   [1,0,1],
//   [1,1,0],
//   [1,1,0]
// ]
// Output: 7
// Explanation: 
// There are 6 squares of side 1.  
// There is 1 square of side 2. 
// Total number of squares = 6 + 1 = 7.
 

// Constraints:

// 1 <= arr.length <= 300
// 1 <= arr[0].length <= 300
// 0 <= arr[i][j] <= 1


// Solution:

function countSquares(matrix: number[][]): number {
    let res = 0
    for (let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if (matrix[i][j]>0 && i>0 && j>0){ //discludes top and left edges and 0's
                matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) //if any are 0 it stays the same
            }
            res += matrix[i][j]
        }
    }
    return res
};


//start from top left 
//every corner of a square has three adjacent inner squares with length-1
//calculate each spot as a bottom-right corner of a square by checking the left, topleft, and top coordinates
    //these 3 coordinates will have squares of length -1 from the bigger square. 
    //by taking the minimum length of these 3 coordinate's squares + 1 you get the largest square from the currnet coordinate
    // 1 1 1 0              1 1 1 0
    // 1 1 1 0   --->>      1 2 2 0
    // 1 1 1 0              1 2 3 0
