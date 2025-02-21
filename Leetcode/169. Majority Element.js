// 169. Majority Element - Easy

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = {}
  for(const x of nums){
      if(map.hasOwnProperty(x)){
          map[x] += 1
      }else{
          map[x] = 1 
      }
      if (map[x]>nums.length/2){
          return x
      }
  }
};

//just hash map ? 


//Second Boyer-Moore Algorithm solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let counter = 0
  let majorCandidate = 0 

  for (const x of nums){ 
      if (counter === 0){ //if the counter is 0 need to set a new major candidate and increase the counter
          majorCandidate = x 
          counter++
      }else if(majorCandidate === x){
          counter++
      }else if(majorCandidate!= x){
          counter--
      }

  }
  return majorCandidate
};

