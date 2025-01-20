// 5 kyu - First non-repeating character

// Description:

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// Solution:

function firstNonRepeatingLetter(s) {
  let sLow = s.toLowerCase()
  for (let i=0; i<sLow.length; i++){  
    if (sLow.lastIndexOf(sLow[i])=== sLow.indexOf(sLow[i])) return s[i]
  }
  return '' //edge cases
}
firstNonRepeatingLetter('moonmen')

//check every letter. see if the index of that letter is equal to the index of the reverse find. 
  //if so then it is the only instance
