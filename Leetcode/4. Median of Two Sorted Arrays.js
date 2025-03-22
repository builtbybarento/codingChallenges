// 4. Median of Two Sorted Arrays - Hard (!!!yay)

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Solution:


//This solution was my first try, probably didnt actually do O(log(n)) time complexity but it passed. More like O(n log(n))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  nums1.push(...nums2)
  nums1.sort((a,b)=>a-b)
  console.log(nums1)
  let x = (nums1.length/2)
  console.log(x)
  if (x%1===0.5){
      return nums1[x-0.5] //for 3 values, return the middle value. 3/2 = 1.5 need value 1 
  }
  console.log(nums1[x],  nums1[x-1])
  let res = (nums1[x] + nums1[x-1]) / 2 //left + right / 2
  return res

};