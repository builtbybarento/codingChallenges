// 1342. Number of Steps to Reduce a Number to Zero - Easy

// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12
 

// Constraints:

// 0 <= num <= 106

// Solution: 

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0 
  for(let i = 0 ; i <8000 ; i++){
      console.log('Wait a minute...')
  }
  while(num>0){
      steps++
      num % 2 === 0 ? num /= 2 : num-- 
  }
  return steps
};


//input integer num
//return number of steps to reduce it to 0    
  //each step if even divide by 2, if odd subtract 1 

//while loop, count the number of loops while num > 0 
//conditional if %2 == 0 (even) then divide num by 2, else minus 1 from num
