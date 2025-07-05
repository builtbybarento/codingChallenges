// 108. Convert Sorted Array to Binary Search Tree - Easy

// Description:

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.

// Solution:

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let center = Math.floor(nums.length/2)
    let node = new TreeNode(nums[center])
    if (center>0) node.left = sortedArrayToBST(nums.slice(0, center))
    if (center<nums.length-1) node.right = sortedArrayToBST(nums.slice(1+center))
    //let leftside = nums.slice(0, center) //left of center
    //let rightside = nums.slice(1+center) //right of center
    //if (leftside.length>0) node.left = sortedArrayToBST(leftside) 
    //        //if leftside.length = 1 then val of node.left=that number
    //if (rightside.length>0) node.right = sortedArrayToBST(rightside)
    return node
};

//cant just throw everythnig on the left or right, cant have left extending more than right
//start in the middle of the array. start in center. -10, -7, -8, -3, 0, 1, 5, 8, 9 start at 0 (4). 9/2 = 4.5. take the Math.ceil(9/2) to get the 0 element. left = arr.splice(0, ceil(9/2)), right = arr.splice(ceil(9/2)+1)
//cut the left side in half, 4/2 = 2 get -7 (the second element)
//-7 on the left of 0. left of -7 is -10. -10 is only 1 element so it becomes left of -7. 
//right of -7 is -8, -3. divide by 2 get -8 as center (1st element). right becomes -8. 
//left of -8 is nothing. right of -3 by itself, so right becomes -3
//then go to right side of 0. 1 5 8 9 4/2 = 2, center is 

//Better Solution: 

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function splitEven(leftside, rightside){
        if (rightside<leftside) return null
        let center = Math.floor((rightside+leftside)/2)
        let node = new TreeNode(nums[center])
        node.left = splitEven(leftside, center-1)
        node.right = splitEven(center+1, rightside)
        return node
    }
    return splitEven(0, nums.length-1)
};