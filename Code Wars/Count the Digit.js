// 7 kyu - Count the Digit

// Description:
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// Solution: 

function nbDig(n, d) {
  let k = ''
  for(let i=0; i<=n; i++){
    k += i**2 //concatenate isqured to k 
  }
  k = k.split('').filter(x=>x===`${d}`)
  return k.length
}

//input integer pos and a digit 0-9
//square all numbers between 0 and n
//count the number of digits used to write all of the squared numbers

//n = 10, d= 1 
// squares are 0, 1,4, 9... 100
//count the number of times '1' is used ... total count is 4

//n = 5, d= 1 
// 0, 1, 4, 9, 16, 25 ===> 2 times

//need to make a string of digits as the squares
//convert it to array and filter by digit
//return the count