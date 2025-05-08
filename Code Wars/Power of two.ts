// 7 kyu - Power of two

// Description:

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// power_of_two?(1024) # true
// power_of_two?(4096) # true
// power_of_two?(333)  # false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

// Solution:

export function isPowerOfTwo(n: number): boolean {
  if(n===1) return true
  while(n!=2){
    if (n%2 !== 0){ //if not divisible by 2 return false
      return false      
    }
    n = n / 2 //div by 2 until it reaches 2 
  }
  return true
}

//must return if the value can be root 2 until it equals 2

//maybe run a while loop
//if eventually loops down to 2 then return true
//if eventually loops down to something that is not an even nubmer then return false