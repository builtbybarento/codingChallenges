// 7 kyu - Mumbling

// Description:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution:

export function accum(s: string): string {
  let ans: string = ''
  for(let i=0; i<s.length; i++){
    ans += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) +'-'
  }
  return ans.slice(0, ans.length-1)
}

//make a loop to add capital letter and lowercase repeating(i) times