// 8 kyu - Sum of differences in array

// Description:

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// Solution:

export function sumOfDifferences(arr: number[]): number {
    arr = arr.sort((b,a)=>a-b)
    let ans: number = 0
    for(let i=1; i<arr.length; i++){
      ans+= (arr[i-1] - arr[i])
    }
    return ans
  }
  
  //first sort in descending order
  //x[n-1] - x[n] add them all up in a loop
  