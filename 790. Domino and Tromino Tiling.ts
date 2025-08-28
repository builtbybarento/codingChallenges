// 790. Domino and Tromino Tiling  - Medium 

// Description:

// You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.


// Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.

// In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

 

// Example 1:


// Input: n = 3
// Output: 5
// Explanation: The five different ways are shown above.
// Example 2:

// Input: n = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 1000

// Solution:

function numTilings(n: number): number {
    const ways = [0, 1, 2, 5]
    for (let i=4; i<=n; i++){
        ways[i] = (ways[i-1]*2 + ways[i-3]) % (10**9 + 7)
    }
    return ways[n] 
};

//2 types of tiles: 2x1 or tromino top-left-corner 3 piecething 
//given an integer n, return the number of ways to tile a 2 x n board. modulo 10^9 + 7 
//ex. n=3. can either do 2 x trominos (2 ways to stack them) or 3x2's (3 ways to stack them). total = 5
//basically, if n=1 theres only 1 way to stack them
//if n= 2 theres also only 2 ways to stack 2 dominos
//if n= 3 theres 3 ways to stack 3 dominos + 2 ways to stack the trominos. so n + n/3.floor * 2 
//if n= 4 theres 4 ways to stack 4 dominos? + 2 * 2 ways to stack the trominos with 1 domino = 8 
//if n= 5 theres like 5 ways to stack 5 dominos, 2 * 4 ways to stack the trominos ?  27
//can stack 1x2 1 way
//can stack 2x2 2 ways
//can stack 3x2 2 ways + the nubmer of ways you can do 2x2 and 1x2 ? 
//can stack 4x2 11 ways: 5 + 2 + 1  ? 2 ways *2 + 11 - 5 = 6, 1+2 * 2. two ways to 
//can stack 5x2 27 ways: 11*2 + 5 ? n-1 * 2 + n-2 
//for every additional, theres the previous amount of ways * 2 + something 
//ways[i-1]*2 
//or more like the last multiple of 3*2^(difference) + ways(difference)
//if theres 30 pieces say theres 100 ways to order them
//with 31 pieces theres 100 ways to order them on the left, and 100 ways to order them on the right. plus theres 2 more spots left and right. but not just +2 because each piece can move between them 
//i can think of like a dfs style solution but a dp solution is difficult. maybe try to think backwards? based on what though 
//0, 1, 2, 5, 11, 24, 53.
// 1, 1, 3, 6, 13,  29 
// 1 = 0*2 + 1 
// 2 = 1*2 
// 5 = 2*2 + 1
// 11 = 5*2 + 1
// 24 = 11*2 + 2
// 53 = 24*2 + 5
// 117 = 106 + 11
// 258 = 234 + 24
// 569 = 516 + 53 
//pretty easy to see now. kinda cheated. last * 2 + 3 times ago || 1 
//must define the first 3 since these are based on the arbitrary shapes