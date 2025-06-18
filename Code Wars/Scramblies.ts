// 5 kyu - Scramblies

// Description: 

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// Solution:

export function scramble(str1: string, str2: string): boolean {
    const count: Record<string, number> = {};

    for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

//return true if all the letters in str2 are in str1 
//too slow to check every letter and remove each letter. replace is too slow

//need to soemhow check if each letter is in there enough times.
//check if str1.filter.length >= str2.filter.length 
//but first convert str1 to a set
//filter is too slow too

//maybe sort them and do a while loop with if theyre the same increment, if less than continue and if 
//even 2 pointer is too slow??? too much comparison ? 