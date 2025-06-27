// 7 kyu - Simple beads count 

// Description:
// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement a function returning the number of red beads.
// If there are less than 2 blue beads return 0.

// Solution:

export function countRedBeads(n: number): number {
  return n<2 ? 0 : (n-1)*2
}