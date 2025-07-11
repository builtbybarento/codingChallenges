// 7 kyu - Bubble Sort

// Description:
// #Bubbleing around

// Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.

// e.g.

// If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.

// [1,2,4,3] should return [ [1,2,3,4] ]
// [2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]
// [1,2,3,4] should return []

// Solution: 

function bubble(arr) {
  console.log(arr)
  let sorted = false
  let ans = []
  while (!sorted){
    sorted = true
    for (let i=0; i<arr.length-1; i++){
      if (arr[i]>arr[i+1]){
        let a=arr[i+1]
        arr[i+1]=arr[i]
        arr[i]=a
        sorted=false
        ans.push(arr.slice())
      }
    }
  }
  return ans
}