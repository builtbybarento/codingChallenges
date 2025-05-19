// 7 kyu - Alternate capitalization

// Description:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Solution:

export function capitalize(s: string): [string, string] {
  return [s.split('').map( (x,i)=>i%2===0 ? x.toUpperCase() : x.toLowerCase() ).join(''), 
          s.split('').map( (x,i)=>i%2===0 ? x.toLowerCase() : x.toUpperCase() ).join('')]; // your code here
}