// 1143. Longest Common Subsequence - Medium 

// Description:

// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

// Solution: (2d array version)

function longestCommonSubsequence(text1: string, text2: string): number {
    const matrix: number[][] = new Array(text1.length).fill(null).map(()=> new Array(text2.length))
    for (let i=0; i<text1.length; i++){
        for (let j=0; j<text2.length; j++){
            if (text1[i] === text2[j]) matrix[i][j] = 1 + (i>0 && j>0 ? matrix[i-1][j-1] : 0)
            else matrix[i][j] = Math.max( (i>0 ? matrix[i-1][j] : 0) , (j>0 ? matrix[i][j-1] : 0) )
        }
    }
    return matrix[text1.length-1][text2.length-1]
};

///find the length of the longest common subsequence
/// ex abcde, ace -> ayce
/// a-> ab ->ac yes -> acd no -> ace yes ? -> ad -> ae -> bc -> bd -> be -> cd -> ce yes -> de -> d
//DP[i][j] = DP[i-1][j-1] + 1, if text1[i] == text2[j] DP[i][j] = max(DP[i-1][j], DP[i][j-1]), otherwise
//so make a 2d array dp comparing all the letters in text1 to text2 
//  a b c d e
//a 1 1 1 1 1
//c 1 1 2 2 2   
//e 1 1 2 2 3 ---> answer is 3 ohhhhhh

//if text[i] == text[j] then dp[i][j] = dp[i-1][j-1] + 1  ???? else DP[i][j] = max(DP[i-1][j], DP[i][j-1]) i guesss

//Linear solution:

function longestCommonSubsequence2(text1: string, text2: string): number {
    let lastRow = new Array(text2.length).fill(0)

    for (let i=0; i<text1.length; i++){
        let diagonal = 0
        for (let j=0; j<text2.length; j++){
            const last = lastRow[j]
            if (text1[i]===text2[j]) lastRow[j] = diagonal + 1
            else lastRow[j] = Math.max(lastRow[j-1]||0 , lastRow[j])
            diagonal = last
        }
        //console.log(lastRow)
    }
    return lastRow[text2.length-1]
};
