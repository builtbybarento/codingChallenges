// 40. Combination Sum II - Medium 

// Description:

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

// Solution:

function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    const combo: number[] = []
    candidates.sort((a,b)=>a-b) //sort to avoid duplicates

    function check(sum: number, index: number){
        for(let i=index; i<candidates.length; i++){
            //console.log(candidates.length, index, sum)
            if (i > index && candidates[i] === candidates[i - 1]) continue //skip duplicates that have already been tested 
            if (sum + candidates[i] > target) break //skip all wrong combos
            combo.push(candidates[i])
            if (sum + candidates[i] === target){
                res.push(combo.slice())
            } //dont check next if =30 just go backtrack
            else if (sum + candidates[i] < target) check(sum + candidates[i], i + 1) //if index is higher than candidates length the loop just stops
            combo.pop() //backtrack
        }
    }

    check(0, 0)
    return res
};

//candidate numbers and target, find all unique combos in candidates where the candidate numbers sum to target. each number may only be used once! 
//same as the last one just add i+1 ?  