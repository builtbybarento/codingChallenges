// 714. Best Time to Buy and Sell Stock with Transaction Fee - Medium 

// Description:

// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note:

// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.
 

// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6
 

// Constraints:

// 1 <= prices.length <= 5 * 104
// 1 <= prices[i] < 5 * 104
// 0 <= fee < 5 * 104

// Solution:

function maxProfit(prices: number[], fee: number): number {
    let maxHold = (-1)*prices[0]    //start with initial case of buying the first day. or i could just put -Infinity 
    let maxSold = 0

    for (const price of prices){
        maxHold = Math.max(maxHold, maxSold - price) //either the current max or the last sold - the current price
        maxSold = Math.max(maxSold, maxHold + price - fee) //either the current holding max + the current price-fee or the last maxSold 
    } 

    return maxSold

};

//given array prices for prices of stock on a given day and given fee integer
//find the maximum profit achievable with as many transactions as you like but transaction fee every time you sell
//ex 1,3,2,8,4,9, fee=2. max profit is 8. buy at 1 sell at 8, (+7-2=5) then buy at 4 sell at 9 (+5-2=3) 
//lets consider a linear array dp. at 9. too many considerations. from 1, must consider selling at any point
//2d array 
//  1,      3,      2,      8,      9       4,      9
//1 [0,-1]  [0,-1]  [0,-1]  [5,-1]  [6,-1] [6, 6]  [9 ,6]
//3  
//2 
//8  
//4  
//9

//first possible sale is 1-3. 1-2, 1-8
//so everything after 8 on the x axis is +5 
//lets see backwards. 9->4 is 3. 9->2 is 5. 9->3 is 4 9->1 is 6. so everything after 4 is +3 ? idk 
//consider the first K stock prices. at the end, you either own or dont own. calculate the most profit you could have in these 2 cases