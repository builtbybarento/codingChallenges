// 8 kyu - Invert values

// Description:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

//Solution:

export function invert(array: number[]): number[] {
   return array.map(x=>-x)
}