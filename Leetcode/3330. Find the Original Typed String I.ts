// 3330. Find the Original Typed String I - Easy

// Description:
// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

// Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

// You are given a string word, which represents the final output displayed on Alice's screen.

// Return the total number of possible original strings that Alice might have intended to type.

 

// Example 1:

// Input: word = "abbcccc"

// Output: 5

// Explanation:

// The possible strings are: "abbcccc", "abbccc", "abbcc", "abbc", and "abcccc".

// Example 2:

// Input: word = "abcd"

// Output: 1

// Explanation:

// The only possible string is "abcd".

// Example 3:

// Input: word = "aaaa"

// Output: 4

 

// Constraints:

// 1 <= word.length <= 100
// word consists only of lowercase English letters.

// Solution:

function possibleStringCount(word: string): number {
    let possible = 1
    for(let i=1; i<word.length; i++){
        if(word[i]===word[i-1]){
            possible++
        }
    }
    return possible
};

//given string with repeating letters
//find how many possible strings could have been typed
//only one of the letters was repeating by accident
//ie 'abbcccc' -> 5 possibilities (abbcccc, abbccc, abbcc, abbc, abcccc)
//basically if theres 2 letters repeating, that letter could have 2 possibilities
//if a letter was repeating 4 times, theres 4 possibilities
//minus the overlapping possibility because theres 2 letters that could have changed
//aabbccc -> 2b's 4c's = 6 minus the original output = 5
//abcd -> no repeats = 1 
//aaaa-> aaaa aaa aa a 4 
//aabbcc, abbcc, aabcc, aabbc -> 4 possibilities, 2 overlap. 
//aabbccdd, abbccdd, aabccdd, aabbcdd, aabbccd -> 5 possibilities, 3 overlap

//basically the number of repeating elements - the number of elements that repeat+1 
//ie aabbccdd has 2+2+2+2repeating elements, 

//actually scrap all that just add 1 to possible combinations every time word[i]===word[i-1] its the same

