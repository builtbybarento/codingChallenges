// 6 kyu - Balance the arrays

// Description:
// Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

// [a,a,a,a,b,b] and [c,c,c,d,c,d]
// Both arrays have four of one item and two of another, so balance should return true.

// Have fun!

// Solution:


function balance (arr1, arr2){
  
    function arrCounter(arr){
      let obj1 = {}
      for(let i=0; i<arr.length; i++){
        obj1.hasOwnProperty(arr[i]) ? obj1[arr[i]]++ : obj1[arr[i]] = 1
      }
      let arr3 = []
      for(const x in obj1){
        arr3.push(obj1[x])
      }
      return arr3.sort((a,b)=>a-b).join('')
    }
    
    return arrCounter(arr1) == arrCounter(arr2)
}