// 869. Reordered Power of 2 - Medium 

// Description:

// You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

// Return true if and only if we can do this so that the resulting number is a power of two.

 

// Example 1:

// Input: n = 1
// Output: true
// Example 2:

// Input: n = 10
// Output: false
 

// Constraints:

// 1 <= n <= 109

// Solution:

function reorderedPowerOf2(n: number): boolean {
    if (n<23) return (n & (n-1)) === 0
    let num = 16
    let nums = []
    let str = n.toString()
    while (num.toString().length<=str.length){
        num *= 2 
        if (num.toString().length===str.length){
            nums.push(num.toString())
        }
    }
    str = str.split('').sort().join('')
    for(const num of nums){
        if (num.split('').sort().join('')===str) return true
    }
    return false
};

//can either check every combination and see if its a power of 2
//or count the digits and compare to the powers of 2 with the same length