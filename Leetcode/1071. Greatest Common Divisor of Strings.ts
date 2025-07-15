// 1071. Greatest Common Divisor of Strings - Easy

// Description:

// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.


// Solution:

function gcdOfStrings(str1: string, str2: string): string {
    for (let i=Math.min(str1.length, str2.length); i>0; i--){
           console.log(str1.slice(0,i), i, str1[i-1], str2[i-1])
        if (str1[i-1]!==str2[i-1]) return ""
        if (str1.length%i!==0) {
            continue
        }
        let str = str1.slice(0,i)
        if (str.repeat(str1.length/i) === str1 && str.repeat(str2.length/i) === str2 ) return str1.slice(0,i)
    }
    //console.log(str1.slice(0,end), end)
    return ''
    //string is the smallest substring

};

//return the largest string that can be repeated one or more times to make str1 AND str2
//ie ABAB, AB => AB
//ABCABCABCABC, ABCABC=> ABCABC
//ABCABCABCABCABCABC, ABCABCABCABCABC => ABC. cant be abcabc because the second word has an odd number of abc's.

//they will have to start with the same letters
//find the index that is different. try that repeated. 
//abc abc abc abc abc abc, abcabcabcabc. 6x and 4xabc
    //try abcabcabcabc (4x). doesnt work. 
    //cut in half. abcabc -> works