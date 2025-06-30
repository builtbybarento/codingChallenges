// 4 kyu - Strings Mix

// Description:
// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

// Solution:

export const mix = (s1:string, s2:string): string =>{
  let count1: Record<string,number> = {}
  let count2: Record<string,number> = {}
  for(const x of s1){
    if (x !== x.toUpperCase()){
      count1.hasOwnProperty(x) ? count1[x] += 1 : count1[x] = 1
    }
  }
  for(const x of s2){
    if (x !== x.toUpperCase()){
      count2.hasOwnProperty(x) ? count2[x] += 1 : count2[x] = 1
    }
  }
   console.log(count1, count2)
   let comparison: string[] = []
  for (const key in count1){
    count1[key]>1 && !count2.hasOwnProperty(key) ? comparison.push("1:"+key.repeat(count1[key])) //if only exists in s1 and >1
      : count1[key] > count2[key] && count1[key]>1 ? comparison.push("1:"+key.repeat(count1[key]))//if more in s1
      : count1[key] < count2[key]  && count2[key]>1 ? comparison.push("2:"+key.repeat(count2[key]))//if more in s2
      : count1[key]>1 ? comparison.push("=:"+key.repeat(count1[key])) //if equal amount of instances
      : null
  }
  for (const key in count2){
    if (count2[key]>1 && !count1.hasOwnProperty(key)) comparison.push("2:"+key.repeat(count2[key]))
  } //get the values that are in count2 but not in count1


  comparison.sort((a,b)=> a.charCodeAt(2) - b.charCodeAt(2)) //alphabetical
  comparison.sort((a,b)=>a.charCodeAt(0) - b.charCodeAt(0))  //s1/s2/=
  comparison.sort((a,b)=> b.length - a.length)               //#of instances
  console.log(comparison)
  return comparison.join('/')
}

//given two strings, only taking into acfcount the lowercase letters
//first consider the frequency of the lowercase letters in each string
//ie s1 "A aaaa bb c" 4 a's, 2b, 1c. s2 "& aaa bbb c d" 3a, 3b, c, 
  //so the maximum for 'a' is 4(from s1), the max for b is 3(from s2)
  //we will not consider letters with maximum occurence of 1 
//make a string now "1:aaaa/2:bbb" where 1 is for s1(with the max a values) and 2 is for s2

//the task is to produce a string in which each lowercase letter of s1 or s2 appears as many times as its maximum (not including single instances)
//if the maximum is in s1 and s2 the prefix is '=:' 
//ex: s1 = "my&friend&Paul has heavy hats! &"
//    s2 = "my friend John has many many friends &"
//result = "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
//pretty stupid task but seems simple

//just loop through each string and record the number of instances of each letter
//compare the counts and parse the string depending on which is more
//lets just make the count first
//in order of highest instances to lowest
//then 