// 7 kyu - Create 10x10 array and randomly fill each cell with "A", "B", "C", or "D"

// Description: 

// Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D' and ensure that each row contain at least one occurance of each letter. 
// Example: [ ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'], ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'], ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'], ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'], ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'], ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'], ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ]


// Solution: 

function array10(){
  let arrArr = []
  while(arrArr.length<10){
    let arr = []
    for(let i=0; i<10; i++){
      let r = Math.random()*4
      arr.push(r < 1 ? 'A' : r < 2 ? 'B' : r < 3 ? 'C' : 'D')
    }
    if (arr.includes('A') && arr.includes('B') && arr.includes('C') && arr.includes('D')){
      arrArr.push(arr)
    }
  }
  return arrArr
}
array10()
//make array with random combination
  //let r = Math.random()*4
  //r < 1 ? 'A' : r < 2 ? 'B' : r < 3 ? 'C' : 'D'
///if not all letters contained, remake it 
//stop when there are 10 arrays made