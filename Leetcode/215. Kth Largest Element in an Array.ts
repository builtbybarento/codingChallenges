// 215. Kth Largest Element in an Array - Medium 

// Description:

// 215. Kth Largest Element in an Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

 

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
 

// Constraints:

// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

// Solution:

function findKthLargest(nums: number[], k: number): number {
    const minHeap = new MinPriorityQueue<number>()

    for(const num of nums){
        minHeap.enqueue(num) // add num to heap
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }
    console.log(minHeap)
    console.log(minHeap.front())
    return minHeap.front()//return the front of the minHeap's element
};

