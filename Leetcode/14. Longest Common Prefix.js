// 14. Longest Common Prefix - Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Solution:

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0].split('')

    for(let i=1; i<strs.length; i++){
        while(strs[i].slice(0, result.length) != result.join('')){//whi
            result.pop()
        } //while word doesn start with result, remove last letter
        //if the last letter is the same, check the rest of the letters are the same
    }//result is chopped down every loop until only common letters remain
    return result.join('')
};

//check first letter is common, second letter, third, until not common

//to check if letter is common in the array
//loop through and make sure the letter is in the array 

//loop through array. check if last letter is the same. if not pop it off and check again until it is the same then