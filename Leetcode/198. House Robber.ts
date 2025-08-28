// 198. House Robber - Medium 

// Description:

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

// Solution:

function rob(nums: number[]): number {
    for (let i=nums.length-1; i>=0; i--){
        nums[i] += Math.max(nums[i+2] || 0, nums[i+3] || 0)
        //console.log(nums)
    }
    return Math.max(nums[0], nums[1] || 0)
};

//must skip at least 1 house
//return the maximum 
//do another dp thing starting from the end ? we need the maximum here though
//ex 1,2,3,1 -> 4. 1,2,3,1 goes , , ,1 -> , , ,3,1 -> ,3,3,1 -> 4,3,3,1. 
//2,7,9,3,1 --> , , ,3,1 -> , ,10,3,1 -->  ,10, 10, 3, 1 --> 12, 10, 10, 3, 1
//is there an easier way to check than checking all nums ? 
//2,1,1,1,9,10 --> 9,10-->11,9,10 --> 11,11,9,10 --> 12,11,11,9,10 --> 13,12,11,11,9,10
//doesnt make sense to skip 3 houses. either 1 0 1 0 1 00 1 1 0 0 0 1 you might as well rob the one in the middle too 
//either the n-2 house or the n-3 house needs to be broken into
//skip the array generation just modify in place... 