// 66. Plus One - Easy

//This one was an interesting challenge. A simple task but many edge cases to consider. 

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// Solution:

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length-1]<9){
        digits[digits.length-1]+=1
        return digits
    }//speed up most cases. not needed after refactoring but improved memory

    const last = digits.findLastIndex(x=>x<9)
    for(let i=last+1; i<digits.length; i++){
            digits[i]=0
        }
    if(last==-1){   //if all 9s findlastIndex will return -1
        digits.unshift(1)
    } else{
           digits[last]+=1
    }
    return digits
};
plusOne([9])
//check from right for first digit less than 9
//add one to this digit
//change the rest of the 9s to 0