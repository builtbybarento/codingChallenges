// 3. Longest Substring Without Repeating Characters - Medium 

// Description:

// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

// Solution:

function lengthOfLongestSubstring(s: string): number {
    if (!s) return 0
    let longest = 1
    for (let i=0; i<s.length-1; i++){
        if (longest>s.length - i) break
        for(let j=i; j<=s.length; j++){
            if (j===s.length || s.slice(i,j).includes(s[j])){
                if(j-i>longest) longest = j-i
                break
            }
        }
    }
    return longest
};
//generate all possible substrings ? on^2 ? 
//

//Better sliding window solution: 

function lengthOfLongestSubstring(s: string): number {
    let map = new Map()
    let longest = 0
    let start = 0
    for(let i=0; i<s.length; i++){
        if (map.has(s[i]) && map.get(s[i]) >= start){
            start = map.get(s[i]) + 1
        }//skip to the next letter that isn't a duplicate
        map.set(s[i], i)
        if (i+1 - start > longest) longest = i+1 - start
    }
    return longest
};

//make a map of the last seen 
//check through the array. if the map has seen it and the index is less than the current