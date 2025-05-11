// 6 kyu - Maze Runner

// Description:

// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = {"N","N","N","N","N","E","E","E","E","E"} == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!

// Solution:

export function mazeRunner(maze:number[][], directions:string[]): string{
  console.log(maze, directions)
  let posY : number = maze.findIndex(x=>x.includes(2)) //starting position on the Y axis
  let posX : number = maze[posY].findIndex(x=>x===2) //starting position on the X axis
  console.log(posY, posX)
  for (let i=0; i<directions.length; i++){
    directions[i] === "N" ? posY -= 1
    : directions[i] === "S" ? posY += 1
    : directions[i] === "E" ? posX += 1
    : posX -= 1 // "W" 
    console.log(posY, posX)
    if(posY === maze.length || posY < 0 || posX === maze[0].length || posX < 0){
      //if the position is less than 0 or more than the highest index
      return "Dead"
    }
    if(maze[posY][posX] === 1){
      return "Dead"
    }
    if(maze[posY][posX] === 3){
      return "Finish"
    }
  }
  return "Lost"
}

//given a 2d array and a string of directions NSEW
//if reach the end point (3) return Finish
//if any walls or outside the maze is hit, return dead
//else return lost

//should first define the current position
//must find position equal to 2
//transform the current position until it reaches a position 1 3 or undefined 

//loop through the directions string.split('')
//if N, add 1 to Y value
//if S, minus 1 from Y value
//if E, +1 to X
//if W, -1 to X 
//check if position is a 1 or undefined, return "Dead"
//check if positino is a 3, return "Lost"

//to find first position, loop through maze and find the y coordinate that includes 2
//indexOf()