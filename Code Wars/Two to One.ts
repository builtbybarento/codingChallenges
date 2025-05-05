// 7 kyu - Two to One

// Description: 

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Solution:

export const longest = (s1:string, s2:string): string => {
    let strings: string[] = (s1+s2).split('').reduce((acc:string[],x:string)=>{
      if(!acc.includes(x)){
        acc.push(x)
      }return acc
    },[])
    return strings.sort().join('')
  }
  
  //just have to reduce to single letters then .sort 