// 1657. Determine if Two Strings Are Close - Medium 

// Description:

// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
 

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

// Solution:

function closeStrings(word1: string, word2: string): boolean {
    if (word1.length!==word2.length) return false
    let hash1 = new Map()
    let hash2 = new Map()
    for(const l of word1){
        hash1.set(l, (hash1.get(l) || 0) + 1)
    }
    for(const l of word2){
        hash2.set(l, (hash2.get(l) || 0) + 1)
    }
    let letters = new Set()
    let counts = new Map()
    for (const [key,val] of hash1){
        letters.add(key)
        counts.set(val, (counts.get(val) || 0) + 1)
    }
    // console.log (letters)
    // console.log(counts)
    for(const[key,val] of hash2){
        if (!letters.has(key) || !counts.get(val)) return false //if count===0 should be false
        letters.delete(key)
        counts.set(val, counts.get(val) - 1)
    }
    return true
};

//given 2 words find if they are close (t/f)
//close is if you can swap any two existing characters ie abcd abdc-abCD
//or if you can transform every occurrence of one existing char into another existing char, and swap them
//ie aacbb -> bbcaa

//so they need to have the same letters in them 
//and they need to have the same amount of occurrences of letters. ie cabbba abbccc (1c,2a,3b vs 1a,2b,3c)
//count the occurence of each letter in each word
//compare the letters in each word and the occurences in each word independently