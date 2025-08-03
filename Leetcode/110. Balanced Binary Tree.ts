// 110. Balanced Binary Tree - Easy

// Description: 

// Given a binary tree, determine if it is height-balanced.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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

function isBalanced(root: TreeNode | null): boolean {
    function check(node){
        if (!node) return 0
        let left = check(node.left)
        let right = check(node.right)
        if (Math.abs(left-right)>1 || left==='failed' || right==='failed') return 'failed'
        return 1 + Math.max(left,right)
    }
    return check(root) !== 'failed'
};

//have to go through the nodes and check that the depth and keep returning and make sure imbalance not found