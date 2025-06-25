// 1. Two Sum - Easy 

// Description:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution:

function twoSums(nums: number[], target: number): number[] {
    // let old: Map<number,number>= new Map()
    // for(let i=0; i<nums.length; i++){
    //     if (old.has(target - nums[i])){
    //         return [old.get(target-nums[i]), i]
    //     }
    //     old.set(nums[i], i)
    // }
    for(let i=0; i<nums.length; i++){
        let i2 = [...nums.slice(0, i)].concat(999999, [...nums.slice(i+1)]).indexOf(target - nums[i])
        if (i2>-1) return [i, i2]
    } //cool solution replacing each nums[i] with a 999999 and just searching through the array. Probably a bit slower than a Map() 
};


//given integer array nums and integer target
//return the indices of the two numbers that add up to target
//can be in any order
//assume only 1 solution per set 
//ex. [2,11,15, 7], target 9 => output [2,7]
//can do a comparison function and check every possible comparison On^2
//hash table and check if any match in linear fashion
//ie 9-2=7, 9-11 = -2, 9-15= -6, 9-7=2 solution found
//what if i just search for 9-nums[i] ? linear 
