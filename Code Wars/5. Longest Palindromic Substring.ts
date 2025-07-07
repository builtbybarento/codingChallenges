// 5. Longest Palindromic Substring - Medium

// Description:

// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// Solution:

function longestPalindrome(s: string): string {
    let s1=0
    let s2=2
    let longest = s[0]
    for (let i=1; i<s.length; i++){
        if (s[i]===s[i-1]){
            let s1=i-1
            let s2=i
            while (s1>=0 && s[s1]===s[s2]){
                s1--
                s2++
            }//while palindrome between s1 s2
            let pali = s.slice(s1+1, s2)
            if (pali.length>longest.length) longest = pali
        }
        if (s[i]===s[i-2]){
            let s1=i-2
            let s2=i
            while (s1>=0 && s[s1]===s[s2]){
                s1--
                s2++
            }//while palindrome between s1 s2
            let pali = s.slice(s1+1, s2)
            if (pali.length>longest.length) longest = pali
        }
    }
    return longest

};

//check every start and end position for a substring palindrome ? 
//reuse some previous computation ? 
//check s1=0, s2 =1, check every combination
//maybe search for some 3 letter palindrome then check around it
//start in the center ?