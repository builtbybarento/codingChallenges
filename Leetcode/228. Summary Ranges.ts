// 228. Summary Ranges - Easy

// Description:

// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

// Solution:

function summaryRanges(nums: number[]): string[] {
    const ans: string[] = []
    for (let i=0; i<nums.length; i++){
        let low = nums[i]
        for(let j=i+1; j<nums.length; j++){
            if (nums[j]-nums[i] == 1){
                i = j
            }
        }
        if (low == nums[i]) ans.push(`${low}`)
        else ans.push(`${low.toString()}->${nums[i].toString()}`)
    }
    return ans
};

//given sorted unique integer array nums from range [a,b] (a,b inclusive)
//return the smallest sorted list of ranges that cover all the numbers in the array exactly. that is, each element of nums is covered by exactly one of the ranges and there is no integer x that is in one of the ranges but not in nums. 
//ex 0,1,2,4,5,7 -> ['0->2', "4->5", "7"]
//need to start with the left number and find the last consective. 

