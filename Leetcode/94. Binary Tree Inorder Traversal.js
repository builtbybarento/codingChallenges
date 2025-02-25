// 94. Binary Tree Inorder Traversal - Easy 

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:



// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,2,6,5,7,1,3,9,8]

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
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
*/


var inorderTraversal = function(root) { 
  let result = []


  function check(pointer){
      if(pointer!=null){
          check(pointer.left);
          result.push(pointer.val);
          check(pointer.right);
      }
  }

  check(root)
  return result
}
//if root has some value then call function again on the left 
//something about go left if and and push the val on the left

//call on 1. calls on left. calls on left. left executes all the way down. then the root goes. 4 then 2
//then after 2 is recorded we go to the right side. and start from the left
//if nothing to the left or right now we go back to the right side from the first call 
//calls 3, which calls 6
//after 6, 3 is recorded. then 3.right but thats null so now the tree is finished and the loop stops



//go left go left go left get 4
//left left 2
//left right left
//left right 
//left right right ?? 

//if left go left. keep going until no more lefts
//if no left stop. 
//if already stopped then go right ? 