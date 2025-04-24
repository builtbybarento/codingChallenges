// 8 kyu - Beginner Series #4 Cockroach

// Description:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// Solution:

export function cockroachSpeed(s: number): number{
    return Math.floor(1000*s/36)
  }
  
  //1 km/hr = 10 000cm/hr =  1000/36 cm/hr