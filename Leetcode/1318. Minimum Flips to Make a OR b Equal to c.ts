// 1318. Minimum Flips to Make a OR b Equal to c - Medium

// Description:

// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

 

// Example 1:



// Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
// Example 2:

// Input: a = 4, b = 2, c = 7
// Output: 1
// Example 3:

// Input: a = 1, b = 2, c = 3
// Output: 0
 

// Constraints:

// 1 <= a <= 10^9
// 1 <= b <= 10^9
// 1 <= c <= 10^9

// Solution:

function minFlips(a: number, b: number, c: number): number {
    let res = 0
    while (a>0 || b>0 || c>0){
        if ((c&1)===0){ //if c ends with 0
            if ((a&1)>0) res++  //must change a if a>0 
            if ((b&1)>0) res++  //must also change b if b>0
        }else if (((a|b) & 1) < 1){
            res++
        }
        a >>= 1
        b >>= 1
        c >>= 1
    }
    return res
};

//return minimum flips to make a OR B == C. 

//ex 2, 6, 5. 010, 110, --> 101. need to flip both at the second digit to get 0. need to flip one at the last digit to get 1. 010,110 -> 000, 110 -> 000, 100 -> 001, 100.

//010 | 110 -> 110
//010 & 110 -> 010.
//so the number of wrong digits in 110 (2) plus the wrong 1 in 010 (1) 

//110 & 101 -> 100 -> 
//check the bits one by 1 whether they need to be flipped ? 
//maybe start with a & b -> 010. all of them need to be flipped to get 101 no. 
// start with a | B - > 110. first digit 0 so +1. second digit 1 so +2. 3rd digit ok.