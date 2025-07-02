// 594. Longest Harmonious Subsequence - Easy

// Description:

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.


// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.

 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

// Solution:

function findLHS(nums: number[]): number {
    nums.sort((a,b)=>a-b)
    let max = 0
    for(let i=0; i<nums.length-1; i++){
        if (nums[i+1] - nums[i] === 1){
            let length = nums.filter(x=>x===nums[i+1]||x===nums[i]).length
            console.log(nums.filter(x=>x===nums[i+1]||x===nums[i]))
            if (length>max) max = length
        }
    }
    return max
}
// function findLHS(nums: number[]): number {
//     // nums.sort((a,b)=>a-b)
//     let numbers = new Set(nums)
//     let max = 0
//     for(const num of numbers){
//         if (numbers.has(num+1)){
//             let length = nums.filter(x=>x===num+1||x===num).length
//             console.log(nums.filter(x=>x===num+1||x===num))
//             if (length>max) max = length
//         }
//     }
//     return max
// }


//difference needs to be exactly 1 so no single repeating digits
//sort them and find all the pairs that are within 1 of each other
//just add together the number of instances of these and find the highest result
//can make a count of every number or just filter 

//Better optimized solution:

function findLHS2(nums: number[]): number {
    const map: Map<number,number> = new Map()
    let max = 0
    for(const num of nums){
        map.set(num, (map.get(num)||0) + 1)
    }
    for(const [key, val] of map){
        if (map.has(key+1)){
            if(val+map.get(key+1)!>max){
                max = val+map.get(key+1)!
            }
        }
    }
    return max
};
