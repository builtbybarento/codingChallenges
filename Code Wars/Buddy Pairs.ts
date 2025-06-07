// 5 kyu - Buddy Pairs

// Description:
// Buddy pairs
// You know what divisors of a number are. The divisors of a positive integer n are said to be proper when you consider only the divisors other than n itself. In the following description, divisors will mean proper divisors. For example for 100 they are 1, 2, 4, 5, 10, 20, 25, and 50.

// Let s(n) be the sum of these proper divisors of n. Call buddy two positive integers such that the sum of the proper divisors of each number is one more than the other number:

// (n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1

// For example 48 & 75 is such a pair:

// Divisors of 48 are: 1, 2, 3, 4, 6, 8, 12, 16, 24 --> sum: 76 = 75 + 1
// Divisors of 75 are: 1, 3, 5, 15, 25 --> sum: 49 = 48 + 1
// Task
// Given two positive integers start and limit, the function buddy(start, limit) should return the first pair (n m) of buddy pairs such that n (positive integer) is between start (inclusive) and limit (inclusive); m can be greater than limit and has to be greater than n

// If there is no buddy pair satisfying the conditions, then return "Nothing" or (for Go lang) nil or (for Dart) null; (for Lua, Pascal, Perl, D) [-1, -1]; (for Erlang {-1, -1}).

// Examples
// (depending on the languages)

// buddy(10, 50) returns [48, 75] 
// buddy(48, 50) returns [48, 75]
// or
// buddy(10, 50) returns "(48 75)"
// buddy(48, 50) returns "(48 75)"

// Solution:

export function buddy(start: number, limit: number): number[] {
  for (let n:number = start; n<=limit; n++){
    let nfactors: number[] = giveFactors(n)
    let m: number = nfactors.reduce((acc, x)=>acc+x,0) //sum of nfactors
    if (m<=n) continue //m must be greater than n
    let mfactors: number[] = giveFactors(m)
    if (mfactors.reduce((acc,x)=>acc+x, 0) === n) return [n, m]
    //if sum of mfactors = n and n sum already = m 
  }
  return []
  
  function giveFactors(num: number){
    let factors: number[] = []
    //check only up to sqrt then add the corresponding pairs. saves computation
    for(let j:number = 2; j<Math.sqrt(num); j++){//exclude 1 as a factor
      if (num%j===0) factors.push(j)
    }
    factors = factors.concat(factors.map(x=>num/x))
    if (num%Math.sqrt(num)===0) factors.push(Math.sqrt(num))
    //makes sure to only add the sqrt once. couldve used a set too I guess
    //but harder to concatenate a set probably
    return factors
  }
  
}

//given two positive integers start and limit
//return the first 'buddy pair' such that n is between start and limit, and m is greater than n (can surpass limit)
//if no pairs return "Nothing"

//a pair (n, m) is defined as the sum of the divisors = the other number + 1 
//ie 48 has divisors 1 2 3 4 5 6 8 12 16 24 = 75 +1 
//   75 has divisors 1 3 5 15 25 = 48 + 1

//ok i get the question but how do we do this based on the factors ? 

//factors have to be in pairs, +1 
//so if we consider the 1 to be removed then the sum of factors = other pair number
// 2*24 is 76, 3*16, 4*12, 5*8
// 3*25, 5*15
//ok so maybe just check between start and limit and see if the other number matches 

//first come up with a way to check the left number 
//check factors by taking square root and checking each number for divisibility
//rooot(76) = 8.9
//get 3 5, then add map(x=>76/3, 76/5)
//rather than checking every number between 1-76 
//then add them all together . get 48

//then check the sum of 48 
