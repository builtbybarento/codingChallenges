// 231. Power of Two - Easy

// Description:

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?

// Solution: Recursive

function isPowerOfTwo(n: number): boolean {
    if (n<1) return false
    if (n===1) return true
    return isPowerOfTwo(n/2)
};

//Loop solution:

function isPowerOfTwo2(n: number): boolean {
    while(n>1){
        n/=2
    }
    return n===1
};

//Mathematical solution followup:

function isPowerOfTwo3(n: number): boolean {
    // console.log((Math.round(100000*(Math.log(n)/Math.log(2)))/100000))
    return ((Math.round(1000000000*(Math.log(n)/Math.log(2)))/1000000000)%1 === 0)
};

//Bitwise solution:

function isPowerOfTwo4(n: number): boolean {
    return n > 0 && (n & (n-1)) === 0 //should only be one 1 in the bitwise if its a pow of 2. 1=0001, 2=0010, 4=0100, 8=1000
    //if its a pow of 2 then n-1 should reset all the 0's to 1's and the 1 to 0, leaving a bitwise& of 0
};