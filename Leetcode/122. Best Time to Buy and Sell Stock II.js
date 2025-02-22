// 122. Best Time to Buy and Sell Stock II - Medium

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

// Constraints:

// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

// Solution:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
  //just need to check the array and find left and right values. if next num is higher than right value replace right
      //if new num is lower than right value take the profits from the last pair and start left and right again;
  
  //add up all the left and right values 
  
      let left = prices[0]
      let right = prices[0]
      let profit = 0
  
      for(let i=1; i<prices.length; i++){
          if (prices[i] > right){
              right = prices[i]
          }
          if (prices[i] < right){
              //sell
              profit += right - left
              //reset to new position
              left = prices[i]
              right = prices[i]
          }
      }
      return profit + (right>left ? right - left : 0)
      
  };
  
  //now we cant just hold onto the biggest pair because it can be 2 pairs instead of just 1 
  
  //would need a way to keep track of the increments
  
  //make a left and right
  
  // left right [ 4 1 2 2 4 2 3]
  //so here we would get the biggest pair 1 and 4. then just check the array to the left ?
  
  //now what if you could just make 2 smaller trades
  
  //[4 1 3 4 1 4 5 2 3]
  //here it would be more efficient to buy 1 sell 3 buy 1 sell 3 (+4) rather than holding at 1 and selling for 4 (+3)
  //
  //should record left value and right value
  //left value 1, right value 1
  //right value 3. have a difference of 2 // record this potential sale
  
  //now if the next number is higher than right value, this should replace the right value, new potential sale value
  
  // if the next number is lower than the right value, this should be the next left value. like 1, 3 , 2, now 2 is nextleft
  
  //
  
  //if the price ever goes down then back up,  i should sell and buy back right ? 
  
  // 1   5  3  9  i should always buy 1 sell 5 buy 3 sell 9 right ? 
  
  //so if the next number is lower than the right value there should be a sale
  
  //theres no case where i shouldnt sell it
  
  //just need to check the array and find left and right values. if next num is higher than right value replace right
      //if new num is lower than right value take the profits from the last pair and start left and right again;
  
  //add up all the left and right values 
  
  //
  