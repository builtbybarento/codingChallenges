// 345. Reverse Vowels of a String - Easy

// Description:

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

// Solution:

function reverseVowels(s: string): string {
    let vowelList: string[] = ['a','e','i','o','u']
    let vowels: number[] = []
    for (let i=0; i<s.length; i++){
        if (vowelList.includes(s[i].toLowerCase())){
            vowels.push(i)
        }
    }
    let a: string[] = s.split('')
    for(let i=0; i<vowels.length/2; i++){
        a[vowels[i]] = s[vowels[vowels.length-1-i]]
        a[vowels[vowels.length-1-i]] = s[vowels[i]]
    }
    return a.join('')
};
//make array of all vowel positions
//iterate through vowel position array reversing them