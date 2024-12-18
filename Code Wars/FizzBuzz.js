// 7 Kyu - FizzBuzz

// Description - 

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Solution: 

function fizzbuzz(n){
    let result = []
    for(let i=1; i<= n; i++){
      i%3==0 && i%5==0 ? result.push('FizzBuzz') 
      : i%3==0 ? result.push('Fizz') 
      : i%5==0 ? result.push('Buzz')
      : result.push(i)
    }
    return result
  }
  
  
  //prep
  // N is an integer value greater or equal to 1 
  //return an array of numbers 1 to N, replacing 3s with fizz, 5s with fizzbuzz, and 3 and 5s with fizzbuzz
  //fizzbuzz(3) --> [1,2,"Fizz"]
  
  //need to loop from 1 to n to mak