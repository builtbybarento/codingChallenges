// 7 kyu - Flatten and sort an array

// Description:

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Solution:

export function flattenAndSort(inputArray: number[][]): number[] {
  let output = []
  for (const x of inputArray){
    output.push(...x)
  }
  return output.sort((a,b)=>a-b) 
}export function flattenAndSort(inputArray: number[][]): number[] {
  let output = []
  for (const x of inputArray){
    output.push(...x)
  }
  return output.sort((a,b)=>a-b) 
}export function flattenAndSort(inputArray: number[][]): number[] {
  let output = []
  for (const x of inputArray){
    output.push(...x)
  }
  return output.sort((a,b)=>a-b) 
}
  //input array of arrays
  //output sorted array of nums
  //reduce it to a single array
  //can i push an iterator? like .push(...arr)