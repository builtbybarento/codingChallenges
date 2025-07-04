// 104. Maximum Depth of Binary Tree - Easy

// Description:
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    if (root.left && root.right) return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    else return 1 + maxDepth(root.left ?? root.right)
};

//recursively check left and right. keep checking until you get to two nulls then return a 1 as the depth
//

//Cleaned-up Solution: 

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0
    else return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
