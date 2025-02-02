// 412. Fizz Buzz - Easy

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104

// Solution: 

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = []
  for(let i=1; i<=n; i++){
      result.push(i%3==0 && i%5==0 ? "FizzBuzz" : i%3==0 ? "Fizz" : i%5==0 ? "Buzz" : String(i))
  }    
  return result 
};

//input integer n, more than 1 
//output Fizz or Buzz or Fizzbuzz or n 
  //if n%3==- fizz, if n%5 buzz, if both fizzbuzz, else n 

