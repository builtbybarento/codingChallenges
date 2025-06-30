// 4 kyu - Next bigger number with the same digits

// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Solution:

export function nextBigger(n: number): number {
  console.log(n)
  let str: string = n.toString()
  if (str === str.split('').sort((a,b)=>Number(b)-Number(a)).join('')) return -1
  //if already in order highest to lowest
  let start: number = str.length-2 //starting at second last digit
  while(str[start]>=str[start+1]){ //while not in descending order 
    start-- //this is the starting index of the substring to rearrange
  } console.log(start, str.slice(start))
  let arr: number[] = str.slice(start).split('').map(x=>Number(x))
  
  //now need to find the next highest digit and bring it to the front, then rearrange the rest 
  let nextHighest: number = Math.max(...arr)
  for(const digit of arr){
    if (digit<nextHighest && digit>arr[0]) nextHighest = digit
    //finds lowest digit that is still higher than the starting
  }console.log(nextHighest)
  let nextHighIndex: number = arr.indexOf(nextHighest)
  
  arr.splice(nextHighIndex, 1) //remove the next highest from arr
  arr.sort((a,b)=>a-b) //sort the remaining digits
  arr.unshift(nextHighest)//add the nextHighest back to the front
  console.log(arr)
  
  let newArr: number[] = str.split('').map(x=>Number(x)).concat(...arr) //add the new array to the old numbers
  newArr.splice(start, arr.length) //remove the numbers we rearranged
  console.log(newArr)
  return Number(newArr.join(''))
}

//input a positive integer
//return the next bigger number that can be formed by rearranging the digits. else -1
//ie 2017 -> 2071

//maybe just check number starting at that number and make sure they sort to the same string ? too many sorts 
//probably just find every possible arrangement and sort them, then find the index of the original and +1 it? nah too much

//maybe starting at the end, rearrange the numbers
//if the number is already sorted highest to lowest return -1 
//say 123221 -> 3221 is in order highest to lowest. 
  //check digits right to left to find the first digit that is lower than the digit to its right
  //here it is 2 because 3 is higher than 2 
  //23221 just switch the 3 and 2 get 32221 which is probably the next highest number ? 
  //total 123221 -> 132221 
//lets try 123456789
  //89 is not in descending order. switch these two numbers
  //get 123456789->123456798 easy
//59884848459853 - 59 is not descending. 59853 -> 95853. but actually 83559 is better. 
            //take the next highest number in the sequence to the front, rest in ascending order 
            //59853 -> next highest to 5 is 8. then in order, 3 5 5 9 -> 83559 