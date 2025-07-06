// 111. Minimum Depth of Binary Tree - Easy

// Description:

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
 

// Constraints:

// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000

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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    if (!root.left) return 1 + minDepth(root.right)
    if (!root.right) return 1 + minDepth(root.left)
    return 1 + Math.min(minDepth(root.left), minDepth(root.right)) 
};

//return Math.min(minDepth(root.left), minDepth(root.right)) 
//must end at a leaf node as in left and right are nonexistant
