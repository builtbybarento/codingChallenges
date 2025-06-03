// 6 kyu - Fold an array

// Description:

// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// Solution:

export function foldArray(array:number[], runs:number):number[]{
  for(let i=0; i<runs; i++){
    array = fold(array) //should return the folded array
  }
  return array
}
function fold(array:number[]):number[]{
  const folded: number[] = []
  for(let i=0; i<=(array.length/2)-1; i++){ //array of 5 items goes until 1.5. array of 6 items goes until 2
    folded.push(array[i]+array[array.length-1-i])
    
  }
  if(array.length%2!=0){
     folded.push(array[Math.floor(array.length/2)])
  }//add the middle number to the array if odd 
  console.log(folded)
  return folded
}


//given an array of numbers and the number of folds
//return the folded array
//each fold adds the first and last, second last and second, etc. 
//ie 1 2 3 4 5 => 1+5 2+4 3 = 6 6 3

//so maybe we should just come up with a folding function to fold 1x and just loop it as many times as necessary. 
//if the array is odd numbered then the middle number will not change

