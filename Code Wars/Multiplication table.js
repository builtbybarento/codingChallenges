// 6 kyu - Multiplication table

// Description:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  let first = []
  let result = []
  
  for(let i=1; i<=size; i++){
    first.push(i)
  }//get first array [1,2,3]
  
  for(let i=1; i<=size; i++){
    result.push(first.map(x=>x*i))
  }
  
  return result // insert code here
}


// first row is just 1 2 3
// second row is 1x2 2x2 2x3 
// third is 1x3 2x2 3x3