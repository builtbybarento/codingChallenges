// 8 kyu - Remove duplicates from list

// Description: 

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// Solution: 

function distinct(a) {
  let res = []
  for (const x of a){
    if (!res.includes(x)){
        res.push(x)
    }
  }
  return res
}