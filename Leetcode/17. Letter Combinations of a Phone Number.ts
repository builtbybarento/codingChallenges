// 17. Letter Combinations of a Phone Number - Medium 

// Description:

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Solution:

function letterCombinations(digits: string): string[] {
    let mapping: {[key:string]:string} = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }
    let res: string[] = []
    let combo: string[] = ['','','','']
    const loop = (place): void => {
        for (let i=0; i<mapping[digits[place]].length; i++){
            combo[place] = mapping[digits[place]][i]
            if(digits[place+1]) loop(place+1)
            else res.push(combo.join(''))
        }
    }
    if(digits) loop(0)
    return res
};

//given string 2-9 return all possible letter combinations
//2=a b or c , 3= d e f 4 = g h i

