// 6 kyu - Find the Mine!

// Dedscription:
// You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

// Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

// The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.

// Examples (Input --> Output)
// [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]

// [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]

// [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]

// Solution: 

function mineLocation(field){
  const row = field.findIndex(arr => arr.includes(1)) //find the index of the subarray that includes a 1 
  const column = field[row].indexOf(1)
  return [row, column]
}


//prep
//takes 2d array of 0s. return the location of the 1 in the format [row, column]
//array is always square and always 1 answer

// can check every array for the column. the one that has the 1 is a column

// check every number in the column and return the index of the 1. this is the row