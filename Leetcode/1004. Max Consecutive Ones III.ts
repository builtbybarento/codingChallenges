// 1004. Max Consecutive Ones III - Mediium

// Description:

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// Solution:

function longestOnes(nums: number[], k: number): number {
    let flips = 0
    let current = 0
    let max = 0
    let first = 0
    for (let i=0; i<nums.length; i++){
        current++
        if(nums[i]===0){
            flips++
            while(flips>k){
                current--
                if(nums[first]===0) flips--
                first++
            }
        }
        if(current>max)max=current
    }
    return max
};


//need to know the total number of ones in the array
