// 236. Lowest Common Ancestor of a Binary Tree - Medium 

// Description:

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the tree.

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	const pset: Set<TreeNode> = new Set()
    let qset: Set<TreeNode>
    let found = 0
    const check = function(node){
        pset.add(node)
        //if first value is found
        if (found===0 && (node === p || node === q)){
            qset = new Set(pset) //record the current set as qset. 
            found++ //p and q order doesnt matter just record the count
        }//if second value found 
        else if (found===1 && (node === p || node=== q)){
            found++
        }//exits early if both are found
        // console.log(found)
        if (found<2 && node.left) check(node.left)
        if (found<2 && node.right) check(node.right)
        if (found<2) pset.delete(node)
    }
    check(root)
            // console.log(pset)
            // console.log(qset)
    let lowest = root
    for(const node of pset){
        if (qset.has(node)!) lowest = node
        else return lowest
    }
};

//need to keep track of all the ancestors while searching through the array for the correct nodes
//if node.val === p || node.val===q record the p ancestors. in an array i guess. or a map and backtrack then find the first 1 and take the last 2
//