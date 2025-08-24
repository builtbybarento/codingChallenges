// 1769. Minimum Number of Operations to Move All Balls to Each Box - Medium 

// Description:

// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

 

// Example 1:

// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]
 

// Constraints:

// n == boxes.length
// 1 <= n <= 2000
// boxes[i] is either '0' or '1'.

// Solution:

function minOperations(boxes: string): number[] {
    let res: number[] = new Array(boxes.length).fill(0)
    let boxCount: number = 0
    let stepCount: number = 0
    for (let i=0; i<boxes.length; i++){
        stepCount+=boxCount     //add 1 step for every previously found box
        res[i] += stepCount     //add all the steps to this result 
        if (boxes[i]==='1') boxCount++  //add the current box if exists
    }
    boxCount = 0
    stepCount = 0
    for(let i=boxes.length-1; i>=0; i--){
        stepCount+=boxCount
        res[i] += stepCount
        if (boxes[i]==='1') boxCount++
    }
    return res
};

//given n boxes and a binaryt string boxes of length n
//0 is empty 1 contains 1 ball
//can move one ball from a box to adjacent box per move
//return an array answer of size n where answer[i] is the minimum number of operations needed to move all the balls to the i'th box
//ex '110' -> [1,1,3]
//ex '001011' -> 11, 8, 5, 4, 3, 4 
// '110' just go 0 -> 1 = 1 so 0+=1, then 0 -> skiip so 1. then 1->0
// can i use a cache to make this faster ? like add a count then add this number to the boxes and go both ways ? 
//