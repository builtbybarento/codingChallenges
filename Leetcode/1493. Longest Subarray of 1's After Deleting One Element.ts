// 1493. Longest Subarray of 1's After Deleting One Element - Medium

// Description:

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.

// Solution (original suboptimal solution):

function longestSubarray(nums: number[]): number {
    let start = 0
    let max = 0
    let current = 0
    let deleted = false
    let zeroExists = false
    for(let i=0; i<nums.length; i++){
        if (nums[i]===1){
            current++
        }
        if(nums[i]===0){
            zeroExists = true
            while (deleted){
                if (nums[start]===1){
                    current--
                    start++
                }else{
                    start++
                    deleted=false
                } 
            }
            deleted = true
        }
        if (current>max) max = current
    }
    return zeroExists? max : max-1
};

//if theres a 1, increment the count.
//if theres a 0, delete it if there wasnt already a deleted 0 and continue.
//if theres a 0 and theres already a deleted 0, move the starting index up to the first non-zero

//if starting at 0, delete until start = i 

//Better solution:

function longestSubarray2(nums: number[]): number {
    let left = 0
    let right = 0
    let max = 0
    let zeroExists = 1
    for (let i=0; i<nums.length; i++){
        if (nums[i]===1){
            right++
        }else{
            left = right
            right = 0
            zeroExists = 0
        }
        if (left+right>max) max=left+right
    }
    return max - zeroExists
};

//count the number on the right of the deleted spot
//if a deleted spot is found, start from there. left=right and right resets to 0
//