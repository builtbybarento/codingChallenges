// 101. Symmetric Tree - Easy

// Description:

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?

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

function isSymmetric(root: TreeNode | null): boolean {
    let truth = true
    function check(leftSide, rightSide){

    //leftside and rightsidevalues must be even
        if (leftSide===null && rightSide===null) {
            return
        }
        if (leftSide===null || rightSide===null || leftSide.val !== rightSide.val) {
            truth = false
            return
        }
        check(leftSide.left, rightSide.right)
        check(leftSide.right, rightSide.left)

       //keep checking as long as left and right are equal
    }
    // console.log(check(root.left, root.right))
    check(root.left, root.right)
    return truth
};