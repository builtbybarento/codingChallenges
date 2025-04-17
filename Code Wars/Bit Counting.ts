// 6 kyu - Bit Counting

// Description:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// Solution:

export function countBits(n: number): number {
    let ans : number[] = []
    while(n>0){
      n % 2 === 1 ? ans.push(1) : ans.push(0)
      n = Math.floor(n/2)//until floor(1/2) = 0 
    }
    console.log(ans)
    return ans.filter(x=>x===1).length
  }
  
  //input integer
  //return number of bits equal to one in the binary representation of that number
  //ex: 1234 is 10011010010 so the function should return 5
  //need to convert number to binary (i forget how)
  //just reduce for every item in array to add if its 1 . or filter and take the length
  
  //binary is just divide by 2 and record if the remainder was 1 or 0