// 334. Increasing Triplet Subsequence - Medium 

// Description:

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

// Solution:

function increasingTriplet(nums: number[]): boolean {
    let left = Infinity
    let secondLeft = Infinity
    for (const num of nums){
        if (num <= left) left = num
        else if (num <= secondLeft) secondLeft = num
        else return true
    }
    return false
};

//start in the middle. 5,0. nothing between them
//left = 5. right = 0
//1,4. 2ndleft = 5, left = 1. right = 4. secondright = 0
//if left<second right or right>2nd left return true