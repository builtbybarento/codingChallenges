// 3136. Valid Word - Easy

// Description:

// Hint
// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.
 

// Example 1:

// Input: word = "234Adas"

// Output: true

// Explanation:

// This word satisfies the conditions.

// Example 2:

// Input: word = "b3"

// Output: false

// Explanation:

// The length of this word is fewer than 3, and does not have a vowel.

// Example 3:

// Input: word = "a3$e"

// Output: false

// Explanation:

// This word contains a '$' character and does not have a consonant.

 

// Constraints:

// 1 <= word.length <= 20
// word consists of English uppercase and lowercase letters, digits, '@', '#', and '$'.

// Solution:

function isValid(word: string): boolean {
    let vowel = false
    let consonant = false
    let vowelList= [97,101,105,111,117,65,69,73,79,85]
    for (let i=0; i<word.length; i++){
        const charCode = word.charCodeAt(i)
        if (charCode<48 || (charCode>57 && charCode<65) || (charCode>90 && charCode<97) || charCode>122) return false
        if (vowelList.includes(charCode)) vowel = true
        else if (charCode>=65) consonant = true
    }
    return vowel && consonant && word.length>=3
};

//return true or false
//must have minimum 3 chars, only digits 0-9 and letters a-z A-Z
//must contain at least one vowel a e i o u
//must include at least one consonant
// char code 48-57, 65-90 97-122
