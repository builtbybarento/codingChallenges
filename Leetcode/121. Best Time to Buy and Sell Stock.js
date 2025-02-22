// 121. Best Time to Buy and Sell Stock - Easy

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// Solution:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  //consider case of 1 item in array
  if(prices.length === 1) return 0

  let left = prices[0]
  let right = prices[1]
  let lowest = prices[0] //placeholder for new potential left val
  for(let i = 1; i<prices.length; i++){
      if(prices[i]>right){ //first replace the right value if a bigger value is found. 
          right = prices[i]
      }//if a new highest value is found, then whatever lowest value to its left should be the new pair
          // the next line will take care of whether a new highest val is found or not
      if(prices[i]-lowest > right - left){ //if a bigger pair is found than the left -rgiht recorded
          left = lowest
          right = prices[i]
      }
      if(prices[i]<lowest){ //does it need to be lower than left ? proabbly not
          lowest = prices[i]
      }
  }
  return right - left > 0 ? right - left : 0
};

//given an array of pos numbers prices
//you want to buy low and sell high to achieve max profit
//return the max profit
//basically find the left and right nums with the highest difference

//[715364] -> buy for 1 sell for 6, profit = 5

//the problem is if i go through linear then i dont know if the pair on one char will be better than the next
//like if i haver 1  2 2 5 0 3 1 6 
//say 1 is the lowest num left. record lowest = 1[0] right is 2[1]. 
//check 2, nothing happe.s check 5 and its bigger
//check 0, now 0 is smaller than left but index is higher than right
  //add 0 to a new left variable

//check 3. if 3 - new lowest //(0) is higher than the old pair, then this is the new right number and 0 is the new left number
