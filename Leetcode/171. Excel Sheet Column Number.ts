// 171. Excel Sheet Column Number - Easy

// Description:

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...
 

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
 

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].

// Solution:

function titleToNumber(columnTitle: string): number {
    let ans = 0
    for (let i=0; i<columnTitle.length; i++){
        let value = columnTitle.charCodeAt(columnTitle.length - 1 - i) - 64 //'A' is 65 
        ans += value * 26**i //0 will be *1, then *26, then *26^2 etc
    }
    return ans
};

//-64 from charcode to get number
//