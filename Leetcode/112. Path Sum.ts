// 112. Path Sum - Easy

// Description:


// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

 

// Example 1:


// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
// Example 2:


// Input: root = [1,2,3], targetSum = 5
// Output: false
// Explanation: There are two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.
// Example 3:

// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    let path = []
    let total = 0
    function check(node){
        path.push(node) //start with root
        total += node.val   //5
        //console.log(node.val, total)
        if (total === targetSum && !node.left && !node.right) return
        //console.log(path)
        //backtracking if leaf doesn't add up correctly
        if (!node.left && !node.right){
            let last = path[path.length-1]
            total -= node.val
            path.pop() 
            if(path.length===0) return total = -1001
            while (!path[path.length-1].right || path[path.length-1].right===last){
                //console.log('back', path[path.length-1].val, total)
                last = path[path.length-1]
                total -= path[path.length-1].val
                path.pop() 
                if(path.length===0) return total = -1001
                //console.log(path)
            }
            if(path) check(path[path.length-1].right)

        }
        else if (node.left) check(node.left)
        else check(node.right)
    }
    check(root)
    // console.log(total)
    return total === targetSum
};

//stack solution
//if left push left. push middle. if right push right
//7, 11, 2, 4, 5, 13, 8, 4, 1. 
//total = 5  + 4 + 11  + 7 how do i backtrack
//stack pointers and counter

//worse concatenating map solution: 
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // if (!root) return false
    function check(node){
        if (!node) return []
        if (!node.left && !node.right){
            console.log(node.val, 'end')
            return [node.val]
        }
        return check(node.left).concat(check(node.right)).map(x=>x+node.val)
    }
    // console.log(check(root))
    return check(root).includes(targetSum)
};

//better solution: 