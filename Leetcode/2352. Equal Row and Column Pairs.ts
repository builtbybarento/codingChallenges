// 2352. Equal Row and Column Pairs - Medium 

// Description:

// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

// Example 1:


// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]
// Example 2:


// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]
 

// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 200
// 1 <= grid[i][j] <= 105

// Solution:

function equalPairs(grid: number[][]): number {
    let rowMap = new Map()
    for (let rowArray of grid){
        let row = rowArray.map(x=>x.toString()).join()
        rowMap.set(row, (rowMap.get(row) || 0) + 1)
    }//each row is set to memory on how many times it occurs
    let count = 0
    for (let i=0; i<grid.length; i++){
        let column: string[] = []
        for(let j=0; j<grid.length; j++){
            column.push(grid[j][i].toString())
            if (j===grid.length-1){
                count += (rowMap.get(column.join()) || 0)
                column = []
            }
        }
    }
    return count
};
//reutnr the number of pairs of rows and columns that are equal
//ex [321][176][277] -> [321] [321] row and column

//each row is like 0,1,2,3... and each column is like 0,0,0,0...
//could compare all rows and columns
//count the number of each row combination. loop through columns and add 1 for every time each row combination showed up
