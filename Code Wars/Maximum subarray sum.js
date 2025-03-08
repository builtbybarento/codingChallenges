// 5 kyu - Maximum subarray sum

// Description:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// Solution:

var maxSequence = function(arr){
  let current = 0 
  let max = 0
  for(const num of arr){
    current += num  //add sum
    if(current>max){
      max = current //set max
    }
    if(current<0){
      current = 0 //reset count
    }
  }
  return max
}
//

//input is an array of pos and neg integers
//if all neg nums then return 0 
//empty list also 0

//ex [1, -1, 1, 1, -1,-9, 3, 2] => 5 ( [3,2] 3+2=5) return the highest sum of any continuous subarray (contiguous ?) 

//start at the beginning and count until you get to a negative
// 1 -1 (current sum is neg)
// 1, 1, -1, -9 (current sum is neg)
// 3, 2 (current sum is 5) new highest

//in opposite direction:
//2, 3, -9 
//-1
//1, 1, -1, 1

//for loop through every item
//start counting a current sum
//if current sum is higher than highest, make it the new highest 
//if current sum is negative, reset to 0 and continue to the next number 
//return the highest count