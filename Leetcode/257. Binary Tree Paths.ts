// 257. Binary Tree Paths - Easy

// Description:

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]
// Example 2:

// Input: root = [1]
// Output: ["1"]
 

// Constraints:

// The number of nodes in the tree is in the range [1, 100].
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

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = []
    const stack: string[] = []
    function check(node){
        stack.push(node.val.toString())
        if (node.left) check(node.left)
        if (node.right) check(node.right)
        if (!node.left && !node.right) ans.push(stack.join('->'))
        stack.pop() //backtrack
    }
    check(root)
    return ans
};

//need to make a stack, just keep adding until you get to a leaf. then .join the stack and add to answer array