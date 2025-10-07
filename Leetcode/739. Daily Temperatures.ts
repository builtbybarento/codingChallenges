// 739. Daily Temperatures - Medium 

// Description:

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

// Solution:

function dailyTemperatures(temperatures: number[]): number[] {
    let stack = []
    let res = new Array(temperatures.length).fill(0)
    for (let i=0; i<temperatures.length; i++){
        while (stack.length>0 && temperatures[stack[stack.length-1]] < temperatures[i]){
            let index = stack.pop()
            res[index] = i - index
        }   
        stack.push(i)
    }
    return res
};

//given array of integers temperatures return an array that answer[i] is the number of days you have to wait after the i'th day
//to get a warmer temperature. if none then answer[i] == 0 instead

//ex temps= [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
//is this like a dp question ? stack ?

//start at 73. check next. is higher. so take j-i = 1. 
//now 74. 75 is higher so 1
// 75. 71 is lower. 69 lower. 72 lower. 76 higher so 4
//71. 69 is lower. 72 is higher. 2
//1
//1
//76 theres nothing higher beside it so 0
//73 is on the end so auto 0
//if today is 70, then in the future a warmer temp must be 71-100. can keep track of when all of these occur next. 
//is this the monotonic stack ?
//while stack is not empty and current temp greater than th top of  the stack update the result for the index at the top of the stack with the difference between the current index and the index on the top of the stack
//pop the index from the stack
//push the current index onto the stack