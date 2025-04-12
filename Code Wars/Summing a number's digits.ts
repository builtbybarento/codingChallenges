// 7 kyu - Summing a number's digits

// Description:
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Solution:

export function sumDigits(n: number): number {
    return Math.abs(n)
      .toString()
      .split('')
      .reduce((acc,x)=>acc+Number(x),0)
  }
  
  //input number
  //return sum of abs value of each digit
  //turn to string, then array, then just add each digit