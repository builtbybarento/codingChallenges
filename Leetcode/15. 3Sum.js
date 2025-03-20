// 15. 3Sum - Medium 


// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// Solution: 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let res = []
  nums.sort((a,b)=>a-b)

  for(let i=0; i<nums.length-2; i++){
      let j = i+1
      let k = nums.length-1
      //skip any i value that is repeated
      if(i>0 && nums[i]===nums[i-1]){
          continue //skip any repeating i
      }
      while(j<k){    
          let total = nums[i] + nums[j] + nums[k]
          if (total>0){
              k--
          }else if(total<0){
              j++ //any repeat values are fine here because it will just loop again
          }else{//if total is 0
              res.push([nums[i], nums[j], nums[k]])
              j++ //go to next j value but need to skip any identical
              while(j<k && nums[j]===nums[j-1]){
                  j++ //skip all identical j values until j and k are the same
              }
          }
      }
  }
  return res
};

//first need to start res 

//i is starter 
//loop through i while balanacing j and k 
//skip through duplicates in i and j 

