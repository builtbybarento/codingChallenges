// 16. 3Sum Closest - Medium 

// Description: 

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

// Solution:

function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a,b)=>a-b)
    let closest = nums[0]+nums[1]+nums[2]
    for (let i=0; i<nums.length-2; i++){
        let j=i+1
        let k=nums.length-1
        let sum = (a,b,c)=> nums[a]+nums[b]+nums[c]
        while (j<k){
            let currSum: number = sum(i,j,k)
            if (Math.abs(target-currSum)<Math.abs(target-closest)) closest = currSum
            if (target<currSum){
                k--
            }else if(target>currSum){
                j++
            }else return target
            // console.log(i, j, k, currSum)
            
        }
    }
    return closest
};

//find the three integers that sum closest to the target
//n^3 solution with three loops
//do you need to n^2 solution? check every pair and the closest num to the target - pairsum ? 

//3 pointers. have to check every 3 without repeats
//cant exit the loop early if over because need to check k-1 and check again
//could set i and j as constant and just loop through k ? exit when diff k > diffk-1  ? 