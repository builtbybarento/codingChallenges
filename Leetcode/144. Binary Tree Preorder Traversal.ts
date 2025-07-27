// 144. Binary Tree Preorder Traversal - Easy

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

// Explanation:



// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 

// Follow up: Recursive solution is trivial, could you do it iteratively?

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

function preorderTraversal(root: TreeNode | null): number[] {
    let ans = []
    function dfs(node){
        if (!node) return
        ans.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }dfs(root)
    return ans
};
//push the root value. then the 

//Iterative Solution:

function preorderTraversal(root: TreeNode | null): number[] {
    let current = root
    const stack = []
    const ans = []

    while(current || stack.length>0){//while theres either something in the stack or currently pointing to something
        while(current){
            stack.push(current)
            ans.push(current.val)
            current = current.left
        }//eventualy null
        current = stack.pop() //backtrack
        current = current.right //now check right side. if null and no more stack loop ends
    }
    return ans
};
