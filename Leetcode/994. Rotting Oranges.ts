// 994. Rotting Oranges - Medium 

// Description:

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 

// Example 1:


// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

// Solution:

function orangesRotting(grid: number[][]): number {
    let fresh: number = 0
    let count: number = -1                              //start count at -1 because the last check will be only 2's no 1's
    let queue: number[][] = []
    for(let i=0; i<grid.length; i++){                   //linear search 
        for (let j=0; j<grid[i].length; j++){
            if (grid[i][j]===1) fresh++                 //count fresh oranges
            if (grid[i][j]===2) queue.push([i,j])       //record all starting positions to stack
        }
    } if (queue.length===0 && fresh===0) return 0 //no rotten already


    // console.log('fresh', fresh)
    //lets establish the boundary and function
    function check(y, x){
        if (y<grid.length && y>=0 && x<grid[0].length && x>=0 && grid[y][x]===1){
            fresh--
            grid[y][x] = 2
            queue.push([y,x])
            // console.log('found', x, y)
        } 
    }

    while(queue.length>0){
        count++
        let length = queue.length
        for(let i=0; i<length; i++){
            let [y,x] = queue.shift()!
            check(y+1,x)
            check(y,x+1)
            check(y-1,x)
            check(y,x-1)
        }
    }
    return fresh === 0 ? count : -1
};

//given m x n grid where each cell can either be 0 - empty, 1- fresh orange, 2- rotten orange
//every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten
//return the minimum number of minutes that must elapse until no cell has a fresh orange. if this is impossible return -1

//counter and breadth first search
//need another way to tell how many fresh oranges remain. linear search and counter i guess. 