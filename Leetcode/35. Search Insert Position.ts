// 35. Search Insert Position - Easy

// Description:

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Solution - proper binary search solution O(logn) complexity

function searchInsert(nums: number[], target: number): number {
    let min = 0
    let max = nums.length - 1
    while (min<=max){
        let mid = Math.ceil((max+min)/2)
        if (nums[mid]===target) return mid
        if (nums[mid] < target) min = mid + 1
        if (nums[mid] > target) max = mid - 1
    }
    return min
};

//if the mid number matches return mid
//else choose the number on the left or right of mid as the new max/min
//if the number is less than nums[0], right will keep moving left until max=-1
//if the number is higher than nums[max], min will keep moving until min = max+1 and loop ends
//when the correct number is found, max will become the target index - 1, then min will be the right index or it will be just in the middle 
