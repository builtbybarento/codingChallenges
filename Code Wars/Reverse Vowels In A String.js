// 6 kyu - Reverse Vowels In A String

// Description:
// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

// Solution:

function reverseVowels(str) {
  const vowelList = "aeiou"
  let vowels = str.split('').filter(x=>vowelList.includes(x.toLowerCase()))
  //[e o a o]
  return str.split('').map(x=> vowelList.includes(x.toLowerCase()) ? vowels.pop() : x).join('')
}

//reverse the position of the vowels in a string
//Tomatoes => Temotaos