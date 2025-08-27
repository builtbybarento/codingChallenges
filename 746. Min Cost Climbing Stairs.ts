// 746. Min Cost Climbing Stairs - Easy
 
// Description:

// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

 

// Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.
// Example 2:

// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// Explanation: You will start at index 0.
// - Pay 1 and climb two steps to reach index 2.
// - Pay 1 and climb two steps to reach index 4.
// - Pay 1 and climb two steps to reach index 6.
// - Pay 1 and climb one step to reach index 7.
// - Pay 1 and climb two steps to reach index 9.
// - Pay 1 and climb one step to reach the top.
// The total cost is 6.
 

// Constraints:

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

// Solution:

function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = new Array(cost.length)
    for(let i=dp.length-1; i>=0; i--){
        dp[i] = Math.min( (dp[i+1] || 0), (dp[i+2] || 0) ) + cost[i]
    }
    return Math.min(dp[0], dp[1])
};

//array cost where cost i is the cost of ith step on the staircase. once you pay the cost you can climb either1 or 2 steps
//can start on index 0 or index 1
//ex cost = [10,15,20] -> 15. skip index 0 and go straight from index 1 to the end
//ex cost = [1,100,1,1,1,100,1,1,100,1] -> 6. start at 0, then 2, then 4, then 6, then 7, then 9 to end. 6 steps total, skipping all 100's
//create a function that checks all possibilities from i+1 and i+2, keeping the sums. if the sum ever goes above the current max then stop looking
//this is basically dfs, but its too slow. need a dp solution
//create array of cost.length size. find the minimum cost at each step to get to the top. we know that the last 2 spots will be equal to their cost
//then each array piece before that is equal to the cost of it + the cost of min(i+1, i+2)
//then return min(0, 1) 