// 6 kyu - Reverse or rotate?


// Description:
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str == "" return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// ("123456987654", 6) --> "234561876549"
// ("123456987653", 6) --> "234561356789"
// ("66443875", 4) --> "44668753"
// ("66443875", 8) --> "64438756"
// ("664438769", 8) --> "67834466"
// ("123456779", 8) --> "23456771"
// ("", 8) --> ""
// ("123456779", 0) --> "" 
// ("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561".

// Solution:

export function revRot(s:string, sz:number): string {
  if (sz<=0 || s==="") return ""
  let i: number = sz
  let arr: string[] = []
  while(i <= s.length){
    arr.push(s.slice(i-sz, i))
    i+=sz
  }
  arr = arr.map(x=> x.split('').reduce((acc,z)=>acc+Number(z),0)%2 === 0 ? x.split('').reverse().join('') : x.slice(1) + x[0])
  return arr.join('')
}

//input a string of digits and a chunk size sz
//cut tyhe string into chunks of size sz. ignore the last chunk if size less than sz
//if the sum of a chunk's digits is divisible by 2, reverse it. else rorate it to the left by one position
//return the modified chunks as a string
//so any chunks less than sz are discarded and not returned
//ex ("664438769", 8) --> "67834466"

//first have to split into chunks
//how do we split ? i guess push the slice to an array
