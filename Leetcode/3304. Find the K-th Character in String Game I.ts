// 3304. Find the K-th Character in String Game I - Easy 

// Description:

// Alice and Bob are playing a game. Initially, Alice has a string word = "a".

// You are given a positive integer k.

// Now Bob will ask Alice to perform the following operation forever:

// Generate a new string by changing each character in word to its next character in the English alphabet, and append it to the original word.
// For example, performing the operation on "c" generates "cd" and performing the operation on "zb" generates "zbac".

// Return the value of the kth character in word, after enough operations have been done for word to have at least k characters.

// Note that the character 'z' can be changed to 'a' in the operation.

 

// Example 1:

// Input: k = 5

// Output: "b"

// Explanation:

// Initially, word = "a". We need to do the operation three times:

// Generated string is "b", word becomes "ab".
// Generated string is "bc", word becomes "abbc".
// Generated string is "bccd", word becomes "abbcbccd".
// Example 2:

// Input: k = 10

// Output: "c"

 

// Constraints:

// 1 <= k <= 500

// Solution:

function kthCharacter(k: number): string {
    let word = 'a'
    while(word.length<k){
        word += word.split('').map(x=>x!=='z' ? String.fromCharCode(x.charCodeAt(0)+1) : 'a').join('')
    }
    return word[k-1]
};

//given a positive integer k
//generate a new string by changing each character in word to its next character in the English alphabet and append it to the original word
//ie performing the operation on "c" generages "cd" and "zb" generates "zbac"

//the starting word is 'a'. if a.length<=k keep generating