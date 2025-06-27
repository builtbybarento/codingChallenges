// 4 kyu - Sum by Factors

// Description:
// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// Solution:

export function sumOfDivided(lst: number[]): number[][] {
  
  let nums: Set<number> = new Set()
  for(let num of lst){
    nums.add(Math.abs(num))
    for(let i=2; i<=Math.sqrt(Math.abs(num)); i++){
      if (num%i===0){
        nums.add(i)
        nums.add(Math.abs(num)/i)
      }//have to check all numbers up to root(abs(num)) for factors.
    }  ///***not just odd numbers because we need the pairing number in case it is prime
  }
  console.log([...nums])
  //here we have all the factors except 1. all positive numbers.
  
  
  let primes: number[] = []
  for (const fac of nums){
    if(fac===2) {
      primes.push(2)//push 2 if it exists. This is the only even prime number
      continue  //go to next factor
    }else if (fac%2==0){
      continue  //if even number go to next. saves time
    } 
    let prime = true
    for(let i=3; i<=Math.sqrt(fac); i+=2){ //only need to check odd numbers because anything even is disqualified. except 2 
      if(fac%i === 0){
        prime = false
        break
      }  //if any factors prime is false
    }
    if(prime) primes.push(fac) //if no factors found
  }
  primes.sort((a,b)=>a-b)
  console.log("primes", primes) //list of sorted prime factors
  
  
  let ans: number[][] = []
  for (const prime of primes){
    let total:number = lst.reduce((acc,x)=> x%prime===0 ? acc+x : acc,0)
    ans.push([prime, total])
  }//just add everything up
  return ans
}

//given array of pos integers like [12,15]
//find all the prime factors of these numbers
//return sorted array of prime factors along with the sum of the integers of which they are a prime factor
//so basically just find all the prime factors and then the rest is easy
//to find all prime factors, check every odd number up to the square root of the integer
//ie for 15, check up to Math.sqrt(15). thats only like 3.9.
//only need to check odd numbers because only 2 is an even prime number
    //*actually no, need to check every number in case the pairing number is a prime and higher than Math.sqrt(num)
//so really starting at 3 and +2 loop until done

//so when you find a factor, how do we know if its prime? thats the question
//ie 14/2 is 7, so 2 and 7 are factors. but how to know if they are prime ? check every odd number up to sqrt(factor) to see? 

//need to consider if the number itself is a factor. just push them all!!!!




