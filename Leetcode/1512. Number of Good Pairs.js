// 1512. Number of Good Pairs - Easy

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// Solution: 

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let result = 0
  let hash = new Map()
  for(const num of nums){
      if (hash.has(num)){  
          result += hash.get(num) //add pairs to result
          hash.set(num, hash.get(num) + 1) //add 1 
      } else{
          hash.set(num, 1) //set num to 1 if doesnt exist
      } 
  }
  return result
};



//array of pos integers
//return the number of "good pairs" as a pos int. can be 0 
  //a good pair is if nums[i] == nums[j] and i<j
  //so 1 2 3 1 1 3 has 4 good pairs, 0,3 0,4 3,4 2,5
//brute force solution
//check each number. check if exists in sliced array, or lastIndexOf(x, i-1)(starting index of i-1)
//would have to slice the array every time and return all the instances. tooo hard lol 

//check every number. add the number to the hash map ? 
//if the number exists in the map, add one to the count of that number
  //also add that number to the result variable. So for every num that was already recorded there is a new pair found with this new variable
//return result