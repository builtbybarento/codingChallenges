// 205. Isomorphic Strings - Easy

// Description:

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// Solution:

function isIsomorphic(s: string, t: string): boolean {
    let valueMap = new Map()
    let mapped = new Set()

    for (let i=0; i<s.length; i++){
        if (!valueMap.has(s[i])){
            if (mapped.has(t[i])) return false //if t[i] already mapped to another val
            valueMap.set(s[i], t[i])
            mapped.add(t[i]) 
        }
        else if(valueMap.get(s[i]) !== t[i]) return false
        //else if the s value has already been mapped to a different t value return false
    }

    return true
};


//maybe just compare values and map then if you get the wrong map value return false
//if the value has been mapped before also return false

//given that s.length === t.length