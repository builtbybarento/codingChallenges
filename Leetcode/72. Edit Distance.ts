// 72. Edit Distance - Medium 

// Description:

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

// Solution: 2d array way

function minDistance(word1: string, word2: string): number {
    const matrix: number[][] = new Array(word1.length+1).fill(null).map(()=> new Array(word2.length+1))
    matrix[0] = matrix[0].fill(0).map((x,i)=>i) //first row is 0 1 2 3 4 5 6 
    for (let i=1; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (j===0){
                matrix[i][j] = matrix[i-1][j] + 1
            }
            else{
                if (word1[i-1]===word2[j-1]){
                    matrix[i][j] = matrix[i-1][j-1]
                } 
                else{
                   matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1 
                } 
            }
        }
        //console.log(matrix)
    }
    return matrix[word1.length][word2.length]
};

//given 2 words return the minimum operations to convert word1 to word2
//can either insert, delete, or replace in one move. 
//ex: "horse" and "ros" -> 3. horse -> rorse -> rose -> ros 
//interesting. need to find a way to optimize which letters to replace and which to delete. in the worst case, could always just replace all the letters and delete/add until the count is the same. 
//ex. "intention" "execution."  intention -> inention -> enention -> exention -> excection -> execution 
//maybe just need to find the amount of letters that match then minus the ones that dont 
//ex horse and ros. just find that o s and os match. then theres 3 that dont match. so 3 operations necessary. 
//ex orseh and ros. orseh->rseh ->rse->-rose -> ros. 4 steps because o doesnt match, e donst match, h doesnt match and r? doesnt match? 
//make a 2d array? 
//  h o r s e
//r 0 0 1 1 1
//o 0 1 1 1 1
//s 0 0 0 2 2 -> 2 matching letters.  but how many replacements needed ? 

//  o r s e h
//r 0 r r r r
//o o o,r o,r o,r o,r
//s o o os,rs os,rs os,rs -> 2 matching letters. but 4 operations needed because we cant make any replacements
//so the letters that cant be replaced 

//    o r s e h   //consider if we have to delete the letter, replace or remove 
//  0 1 2 3 4 5
//r 1 1 1 2 3 4   
//o 2 1 2 3 4 5
//s 3 2 2 2 3 4 //ans is 4. correct

//if the characters match, no new operation is needed. dp[i][j] = dp[i-1][j-1]
//otherwise consider all possibilities. insert dp[i][j-1] +1, delete dp[i-1][j]+1, or replace dp[i-1][j-1] + 1. take the minimum
///if you delete a character, its like a +1 from the last path
//if you keep a character, its like skipping this character
//if you insert then you're comparing this next character with the last. i dont get it
//if you replace everything up to that point, you get max(n,m) 
//so take the minimum between that and the possible solutions
//if you keep a character the same, its like going back to the previous letter combination? basically minimum + 0 ? 
//if you replace a character its like going back 1 step ? 