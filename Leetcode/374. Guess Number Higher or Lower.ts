// 374. Guess Number Higher or Lower - Easy 

// Description:

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked (the number I picked stays the same throughout the game).

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 231 - 1
// 1 <= pick <= n

// Solution:

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let low: number = 0
    let high: number = n+1
    let guessed: number 
    let mid: number
    while (guessed != 0){
        mid = Math.floor((low+high)/2)
        guessed = guess(mid)
        if (guessed === 1) low = mid
        if (guessed === -1) high = mid
    }
    return mid
};
//number 1 to n, have to guess. every wrong guess will return if the number is higher or lower than the guess
//call a predefined API guess(num) which returns 3 possible results: -1, 1, 0 (number is lower, higher, or equal)
//just guess the middle number between 0 and n. then between x and n or 0 and x depending if 