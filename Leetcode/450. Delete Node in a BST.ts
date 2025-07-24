// 450. Delete Node in a BST - Medium 

// Description:

// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.
 

// Example 1:


// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Example 2:

// Input: root = [5,3,6,2,4,null,7], key = 0
// Output: [5,3,6,2,4,null,7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -105 <= Node.val <= 105
// Each node has a unique value.
// root is a valid binary search tree.
// -105 <= key <= 105
 

// Follow up: Could you solve it with time complexity O(height of tree)?

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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null
    if (key < root.val) root.left = deleteNode(root.left, key)
    else if (key > root.val) root.right = deleteNode(root.right, key)
    else{ //key === root.val
        //take the furthest left on the right or vice versa
        if (!root.left && !root.right) return null
        if (!root.left) return root.right
        if (!root.right) return root.left
        let replacement = root.right
        while(replacement.left){
            replacement = replacement.left
        }//go to the lowest item on the right side
        root.val = replacement.val
        root.right = deleteNode(root.right, replacement.val)//delete the original instance of the node that is replacing the deleted node
        //because it is a leaf node it will just return null once it recurses down to that node
    }
    return root
};