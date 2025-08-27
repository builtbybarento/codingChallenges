// 216. Combination Sum III - Medium 

// Description:

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
// Explanation:
// 1 + 2 + 6 = 9
// 1 + 3 + 5 = 9
// 2 + 3 + 4 = 9
// There are no other valid combinations.
// Example 3:

// Input: k = 4, n = 1
// Output: []
// Explanation: There are no valid combinations.
// Using 4 different numbers in the range [1,9], the smallest sum we can get is 1+2+3+4 = 10 and since 10 > 1, there are no valid combination.
 

// Constraints:

// 2 <= k <= 9
// 1 <= n <= 60

// Solution:

function combinationSum3(k: number, n: number): number[][] {
    let res: number[][] = []
    let combo: number[] = []

    function check(sum, index){
        for (let i=index; i<10; i++){
            //console.log(sum, index, i, combo)
            if (sum + i > n) break //no need to check any higher numbers
            combo.push(i)
            if (combo.length === k && sum + i === n) res.push(combo.slice())
            else check(sum + i, i+1)
            combo.pop() //backtrack
        }
    }
    check(0,1)
    return res
};
//find all valid combinations of k digits that sum up to n. 0-9 no repeats
//keep track of all numbers in the combo and the current sum. dont bother continuing to check if the sum is above the current number 