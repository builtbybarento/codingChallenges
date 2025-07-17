// 283. Move Zeroes - Easy

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

// Solution:

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let p1 = 0
    for(let i=0; i<nums.length; i++){
        if (nums[i]!==0) {
            nums[p1] = nums[i]
            p1++
        }
    }
    while (p1<nums.length){
        nums[p1]=0
        p1++
    }
};

//could do splice but that might be slow
//how to do this without shifting every index every time? 
//maybe find the indices of 0s

//2 pointers. first pointer on the index. second pointer checks the next index.
//if index is 0, only second pointer moves. when a non-zero is found, add it to the first pointer index

//Other less optimized, simpler solution: 

function moveZeroes2(nums: number[]): void {
    let p1 = 0
    for(let i=0; i<nums.length; i++){
        if (nums[i]!==0) {
            [nums[p1], nums[i]] = [nums[i], nums[p1]]
            p1++
        }
    }
};

//Splice method (even slower):

function moveZeroes3(nums: number[]): void {
  for (let i=nums.length-1; i>=0; i--){
    if (nums[i]===0) nums.push(...nums.splice(i,1))
  }  
};