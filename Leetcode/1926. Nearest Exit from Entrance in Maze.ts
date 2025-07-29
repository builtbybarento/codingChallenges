// 1926. Nearest Exit from Entrance in Maze - Medium 

// Description:

// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 

// Example 1:


// Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
// Output: 1
// Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
// Initially, you are at the entrance cell [1,2].
// - You can reach [1,0] by moving 2 steps left.
// - You can reach [0,2] by moving 1 step up.
// It is impossible to reach [2,3] from the entrance.
// Thus, the nearest exit is [0,2], which is 1 step away.
// Example 2:


// Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
// Output: 2
// Explanation: There is 1 exit in this maze at [1,2].
// [1,0] does not count as an exit since it is the entrance cell.
// Initially, you are at the entrance cell [1,0].
// - You can reach [1,2] by moving 2 steps right.
// Thus, the nearest exit is [1,2], which is 2 steps away.
// Example 3:


// Input: maze = [[".","+"]], entrance = [0,0]
// Output: -1
// Explanation: There are no exits in this maze.
 

// Constraints:

// maze.length == m
// maze[i].length == n
// 1 <= m, n <= 100
// maze[i][j] is either '.' or '+'.
// entrance.length == 2
// 0 <= entrancerow < m
// 0 <= entrancecol < n
// entrance will always be an empty cell.

// Solution:

function nearestExit(maze: string[][], entrance: number[]): number {
    let q: number[][] = [entrance]
    maze[entrance[0]][entrance[1]] = 'x'
    let count = 0
    while (q.length>0){
        let length: number = q.length
        for(let i=0; i<length; i++){
            let [a,b]: number[] = q.shift()
            if ((a!==entrance[0] || b!==entrance[1]) && (a===0 || b===0 || a===maze.length-1 || b===maze[0].length-1)) return count //if exit found
            //push 4 possible moves
            if (a<maze.length-1 && maze[a+1][b]==='.'){
                maze[a+1][b]='x'//must record string cant record array
                q.push([a+1, b])
            } 
            if (maze[a][b+1]==='.'){
                maze[a][b+1]='x'
                q.push([a, b+1])
            } 
            if (a>0 && maze[a-1][b]==='.'){
                maze[a-1][b]='x'
                q.push([a-1, b])
            } 
            if (maze[a][b-1]==='.'){
                maze[a][b-1]='x'
                q.push([a, b-1])
            } 
        }
        count++
    }return -1
};

//given a m x n matrix maze (0 indexed) with empty cells represented as '.' and walls '+'. given the  entrance of the maze [row,column]. 
//in one step you can move up down left or right into empty cells and cannot step outside the maze. goal is to find the nearest exit from the entrance.
//an exit is defined as an empty cell at the border of the maze. return the number of steps in the shortest path from entrance to exist, or -1 otherwise
//ex. maze = [[+ + . +][. . . +][+ + + .]], entrance 1,2. Theres 3 exits, [1,0], [0,2], [2,3]
    //can reach [1,0] by moving 2 steps left
    //can reach [0,2] by moving 1 step up
    //cant reach 2,3.
    //answer is therefore 1 
