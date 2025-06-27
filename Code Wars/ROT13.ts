// 5 kyu - ROT13

// Description:

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// Solution:

export function rot13(str: string): string {
  const lowerCase: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const upperCase: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const ans: string[] = str.split('').map(x=>{
    if (lowerCase.includes(x)){
      let index = lowerCase.indexOf(x)
      return index < 13 ? lowerCase[index+13] : lowerCase[index-13]
    }
    if (upperCase.includes(x)){
      let index = upperCase.indexOf(x)
      return index < 13 ? upperCase[index+13] : upperCase[index-13]
    }
    return x
  })

  return ans.join('');
}

// T-G 20-6
// h-u  8-21
// i-v 9-22
// s-f 19-5 

// need to add 13 to the place of the digit
// if the place of the digit is 14th or later, minus 13 
//N 14 - A 1 

//USING CHARCODE INSTEAD OF CREATING MY OWN ALPHABET STRINGS

export function rot13(str: string): string {
  
  return str.split('').map(x=>{
    let charCode = x.charCodeAt(0)
    if ((charCode>=65 && charCode<=77) || (charCode>=97 && charCode<=109)){
      return String.fromCharCode(charCode+13)
    }if ((charCode>=78 && charCode<=90) || (charCode>=110 && charCode<=122)){
      return String.fromCharCode(charCode-13)
    }return x
  }).join('')
}

// 'a'.charCodeAt() = 97
// 'z'.charCodeAt() = 122
// 'A'.charCodeAt() = 65
// 'Z'.charCodeAt() = 90