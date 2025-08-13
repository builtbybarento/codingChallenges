// 3541. Find Most Frequent Vowel and Consonant - Easy

// Description:

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.
 

// Example 1:

// Input: s = "successes"

// Output: 6

// Explanation:

// The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
// The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
// The output is 2 + 4 = 6.
// Example 2:

// Input: s = "aeiaeia"

// Output: 3

// Explanation:

// The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
// There are no consonants in s. Hence, maximum consonant frequency = 0.
// The output is 3 + 0 = 3.
 
// Solution:

function maxFreqSum(s: string): number {
    let vowels = new Set(['a','e','i','o','u'])
    let vowMap = new Map()
    let consMap = new Map()
    let vowMax = 0
    let consMax = 0
    for (const letter of s){
        if (vowels.has(letter)) vowMap.set(letter, (vowMap.get(letter) || 0) + 1)
        else consMap.set(letter, (consMap.get(letter) || 0) + 1)
    }
    for (const [key,val] of vowMap){
        if (val>vowMax) vowMax = val
    }
    for (const [key,val] of consMap){
        if (val>consMax) consMax = val
    }
    return vowMax + consMax
};