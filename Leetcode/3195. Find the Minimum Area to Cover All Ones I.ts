// 3195. Find the Minimum Area to Cover All Ones I - Medium 

// Description:

// You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1's in grid lie inside this rectangle.

// Return the minimum possible area of the rectangle.

 

// Example 1:

// Input: grid = [[0,1,0],[1,0,1]]

// Output: 6

// Explanation:



// The smallest rectangle has a height of 2 and a width of 3, so it has an area of 2 * 3 = 6.

// Example 2:

// Input: grid = [[1,0],[0,0]]

// Output: 1

// Explanation:



// The smallest rectangle has both height and width 1, so its area is 1 * 1 = 1.

 

// Constraints:

// 1 <= grid.length, grid[i].length <= 1000
// grid[i][j] is either 0 or 1.
// The input is generated such that there is at least one 1 in grid.

// Solution:

function minimumArea(grid: number[][]): number {
    let iMin = grid.length
    let iMax = 0
    let jMin = grid[0].length
    let jMax = 0
    for (let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if (grid[i][j]===1){
                iMin = Math.min(iMin, i)
                iMax = Math.max(iMax, i)
                jMin = Math.min(jMin, j)
                jMax = Math.max(jMax, j)
            }
        }
    }
    return (1+iMax-iMin)*(1+jMax-jMin)
};

//just find the lowest and highest values for y and x