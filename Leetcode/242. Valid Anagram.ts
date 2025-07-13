// 242. Valid Anagram - Easy

// Description:

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Solution:

function isAnagram(s: string, t: string): boolean {
    const cache: Map<string,number> = new Map()
    if (s.length!==t.length) return false
    for (let i=0; i<s.length; i++){
        cache.set(s[i], (cache.get(s[i]) || 0) + 1)
        cache.set(t[i], (cache.get(t[i]) || 0) - 1)
    }
    for(const [char, val] of cache){
        if (val!==0) return false
    }
    return true
};