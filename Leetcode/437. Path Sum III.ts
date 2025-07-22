// 437. Path Sum III - Medium 

// Description:

// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

 

// Example 1:


// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
// Example 2:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
 

// Constraints:

// The number of nodes in the tree is in the range [0, 1000].
// -109 <= Node.val <= 109
// -1000 <= targetSum <= 1000

// Solution: (original array solution, not optimal but works)

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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0
    let count = 0
    function check(node, possibleRoutes){
        const routes = possibleRoutes.map(x=>x+node.val)
        routes.push(node.val)
        for (const route of routes){
            if (route === targetSum) count++
        }
        if (node.left) check(node.left, routes)
        if (node.right) check(node.right, routes)
    }
    check(root, [])
    return count
};

// pass on the total above and the last number
// 10-> check 5, 10. 15. -> check 3,5,15. 3, 3, 8, 18

//Better map solution with backtracking:


function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = 0
    const routes: Map<number,number> = new Map()
    routes.set(0,1) //in case there are other conditions where lasttotal is 0
    function check(node, lastTotal){
        if (!node) return 0
        let currentTotal = node.val+lastTotal
        //add the number of possible routes to the count
        count += routes.get(currentTotal-targetSum) || 0 //if it doesnt exist just pass 0
        //add the currenttotla to the routelist
        routes.set(currentTotal, (routes.get(currentTotal) || 0) + 1)
        check(node.left, currentTotal)
        check(node.right, currentTotal)
        routes.set(currentTotal, routes.get(currentTotal)! - 1)
        //backtrack and remove 1 from the count at currentTotal
    }
    check(root, 0)
    return count
};
