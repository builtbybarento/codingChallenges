// 498. Diagonal Traverse - Medium 

// Description:

// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

// Example 1:


// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105

// Solution: (Not the best but clean to read)

function findDiagonalOrder(mat: number[][]): number[] {
    let diagonals: number[][] = new Array(mat.length+mat[0].length-1) //m+n length
    for (let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            if (!diagonals[i+j]) diagonals[i+j] = []
            diagonals[i+j].push(mat[i][j])
        }
    }
    // console.log(diagonals)
    let ans: number[] = []
    for (let i=0; i<diagonals.length; i++){
        ans.push(...(i%2===0? diagonals[i].reverse() : diagonals[i]))
    }
    return ans
};



//iterate entire matrix while adding items to the array at index m+n 
//should add every diagonal top down. then just reverse half of them (evens? 