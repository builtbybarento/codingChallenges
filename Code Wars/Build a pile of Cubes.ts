// 6 kyu - Build a pile of Cubes

// Your task is to construct a building which will be a pile of n cubes. 

// The cube at the bottom will have a volume of n 3 n 3 , the cube above will have volume of ( n − 1 ) 3 (n−1) 3 and so on until the top which will have a volume of 1 3 1 3 . 

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build? 

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n 3 + ( n − 1 ) 3 + ( n − 2 ) 3 + . . . + 1 3 = m n 3 +(n−1) 3 +(n−2) 3 +...+1 3 =m if such a n exists or -1 if there is no such n. 

// Examples: findNb(1071225) --> 45 findNb(91716553919377) --> -1

// Solution:

export function findNb(m: number): number {
  let n: number = 0
  let total: number = 0
  while(total<m){
    n++
    total += n**3
  }
  return total === m ? n : -1
}

///creating a pyramid building with square blocks
///bottom is volume n^3, followed by (n-1)^3, up to the top of 1^3 
///findNb take input m which is the sum of n^3 + (n-1)^3 + ... + 1^3 
//output should be the value of n. if n does not exist then return -1

//can just loop through the values until you either get to m or past m
//while loop? with a counterexport function findNb(m: number): number {
 