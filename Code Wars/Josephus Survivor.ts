// 5 kyu - Josephus Survivor

// Description:
// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

// Solution:

export function josephusSurvivor(n: number, k: number) {
  let arr: number[] = []
  for(let i=1; i<=n; i++){
    arr.push(i) //create an array from 1 to n 
  }
  let pointer = 0
  while(arr.length>1){
    pointer += k-1
    while(pointer >= arr.length){ //if pointer is 10 and arr length is 10 go back to 0. loop until a valid pointer 
      pointer = pointer-arr.length
    }
    arr.splice(pointer, 1) //remove the element at the pointer
  }
  return arr[0]
}
//given the number of people in a circle n and interval of elimination k 
//return the last element remaining element after all others are eliminated at interval of k
//so the array starts at 1 and ends at n. ie [1,2,3,4,...n]
//if k=3, start by eliminating 3, then 6, etc