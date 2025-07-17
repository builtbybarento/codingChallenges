// 1456. Maximum Number of Vowels in a Substring of Given Length - Medium

// Description:

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.
// 1 <= k <= s.length

// Solution:

function maxVowels(s: string, k: number): number {
    let start = 0
    let max = 0
    for (let i=0; i<k; i++){
        if (s[i]==="a" || s[i]==="e"|| s[i]==="i"|| s[i]==="o"|| s[i]==="u"){
            max++
        }
    }
    let current = max
    for(let i=k; i<s.length; i++){
        if(s[i]==="a" || s[i]==="e"|| s[i]==="i"|| s[i]==="o"|| s[i]==="u"){
            current++
        }if(s[start]==="a" || s[start]==="e"|| s[start]==="i"|| s[start]==="o"|| s[start]==="u"){
            current--
        }
        start++
        if(current>max)max=current
    }
    return max
};