// 7 kyu - Build a square

// Description:
// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// Solution:

export function generateShape(int: number): string {
  let n: string =  ("+".repeat(int) + "\n").repeat(int)
  return n.slice(0, n.length-1); // your code here'
}