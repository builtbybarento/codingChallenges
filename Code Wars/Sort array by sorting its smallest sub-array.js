// 6 kyu - Sort array by sorting its smallest sub-array

// Description: 

// Given an array of integers, arr, find out 2 indices m, n(0<=m<=arr.length-1, 0<=n<=arr.length-1, m<=n), so that as long as all elements in the subarray(from index m to n, indices m and n inclusive) are sorted properly, with this sorted subarray relacing original subarray, the whole array is sorted (no matter ascendingly or descendingly).

// The subarray should include the least number of elements, means (n-m) must be of the smallest value, and n should also be the smallest one.

// The function accept an array of integers, arr, reutrn the subarray's start and end index in array format, [m,n] as a result.

// For example, in an array [1,2,3,6,4,4], the SMALLEST(with the least numbers of integers) subarray to be found is [6,4,4], if we sort it to [4,4,6], then replace the original subarray, the whole array now turns to be[1,2,3,4,4,6], which is sorted completely. This subarray begins from index 3, and ends in index 5, so the result is [3,5].

// If all elements in the array are the same, return array [0,0]. If all elements in the array are already sorted, no matter ascendingly or descendingly, return [0,0] as well.

// Solution:

function findIndexOfSubArray(arr) {
  let arrReverse = arr.slice().reverse()
  let sorted = arr.slice().sort((a,b)=>a-b)
  let sortedReverse = sorted.slice().reverse()
  
  //check the ascending sorted array
  let m = 0
  let n = 0
  for(let i=0; i<arr.length; i++){
     if (sorted[i] != arr[i]){
       m = i
       break
     }
  }
  for(let i=arr.length-1; i>=0; i--){
    if (sorted[i] != arr[i]){
       n = i
       break
     }
  }
  //check the descending sorted array 
  let mR = 0
  let nR = 0
  for(let i=0; i<arr.length; i++){
     if (sortedReverse[i] != arr[i]){
       mR = i
       break
     }
  }
  for(let i=arr.length-1; i>=0; i--){
    if (sortedReverse[i] != arr[i]){
       nR = i
       break
     }
  }

  return nR - mR > n - m ? [m,n] : [mR,nR]
}

//given an array of integers
//find the two indeces so that all the elements in the subarray are sorted property, ascending OR descending
//actually the indices must be the smallest subarray that can be sorted to make the entire array sorted
//ex [1,2,3,6,4,4] the SMALLEST subarray to sort would be [6,4,4], which can be sorted to give 1,2,3,4,4,6 which is fully sorted
//[1,2,323,45656,2,2,345,6,2,2] -> should return [2,9]
//basically just create the sorted array and see the starting number in the wrong place and the end number in the wrong place
