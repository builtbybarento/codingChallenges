// 2574. Left and Right Sum Differences - Easy

// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

//     answer.length == nums.length.
//     answer[i] = |leftSum[i] - rightSum[i]|.

// Where:

//     leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
//     rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.

// Return the array answer.

 

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

 

// Constraints:

//     1 <= nums.length <= 1000
//     1 <= nums[i] <= 105

// Solution: 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
  return nums.map((x,i)=>{
      //add nums on left 
      let left = i===0 ? 0 : nums.slice(0, i).reduce((acc,x)=>acc+x,0)
      //add nums on right
      let right = i===nums.length-1 ? 0 : nums.slice(i+1).reduce((acc,x)=>acc+x,0)
      //return absolute difference
      return Math.abs(left-right)
  })
};


// ans.length = nums.length
// answer[i] = |leftsum[i]-rightsum[i]|

// leftsum[i] is the sum of elements to the left of index i in the array nums. else 0
// rightsum[i] sum of elements to the right of i

// ie. [1,2,3,4,5] -> 0+14, 1+12, 3+9, 6+5, 10+0