202. Happy Number - Easy

Description:

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1

Solution:

function isHappy(n: number): boolean {
    let seen = new Set<number>()
    function makeHappy(i){
        let newNum = i.toString().split('').map(x=>Number(x)).reduce((acc,x)=>acc + x**2, 0) //add the squares of the digits
        if (newNum === 1) return true
        if (seen.has(newNum)) return false
        seen.add(newNum)
        return makeHappy(newNum)
    }
    return makeHappy(n)
};

//return true or false if number 
//first replace the nmber by the sum of the squares of its digits
//repeat until number equals 1 or loops endlessly in a cycle that doesnt include 1
//return true if it equals 1
//assume the cycle doesnt last forever or add a cutoff. First I'll try assuming it doesn't last forever. 