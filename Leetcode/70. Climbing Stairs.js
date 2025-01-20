// 70. Climbing Stairs - Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

 

// Constraints:

//     1 <= n <= 45


// Solution:

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let stairs = [1]
  for (let i = 0; i<n-1; i++){
      stairs.push(stairs[i] + (stairs[i-1] ? stairs[i-1] : 1 ))
  }
  console.log(stairs)
  return stairs[stairs.length-1]
};


//1 step -> 1 way
//2 steps -> 2 ways
//3 steps -> 3 ways (1 more way than 2)
//4 steps -> 5 ways. Can either start at 3rd and take 1 step or start at 2 and take 2 steps. add the number of ways to get to 2 and the number of ways to get to 3
//5 steps -> samething check the number of ways to get to 4 and the number of ways to get to 3. 5+3= 8. fibonacci.


//make an array of the numbers, start with 1 step, if no steps +1 
//add i-1 and i-2
//dynamic programming solution would be better. 

