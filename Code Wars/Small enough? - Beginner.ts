// 7 kyu - Small enough? - Beginner

// Description:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Solution:

export function smallEnough(a: number[], limit: number): boolean{
  for(let x of a){
    if (x>limit) return false
  }return true
}