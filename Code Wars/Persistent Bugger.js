// 6 kyu - Persistent Bugger.

// Description: 
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit)

// Solution: 

function persistence(num) {
    let result = 0
    while(num>9){
      result++
      num = String(num).split('').reduce((acc,x)=> x * acc, 1)
      console.log(num)
    }
    return result
  }
  persistence(23) // 2 
  
  //num is a positive integer
  //result is the number of times the output digits have to loop to multiply each ither until it reaches single digits
  //ie 24 => 2x4= 8 , output: 1 ; 26 => 2x6 = 12 => 1x2 = 2 , output: 2 
  
  //loop through 
  //while loop? 
  
  //turn the number into a string then array and .reduce to multiply the digits
  //make this a function called multiplyDigits
  
  //while num<9 (single digit) run the multiplyDigits function on num to equal new value of num
  //if num is still double digits, add one to
  
  //return num. (if num<9 to start it shouldnt loop)