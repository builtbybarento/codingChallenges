// 168. Excel Sheet Column Title - Easy

// Description:

// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

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

// Input: columnNumber = 1
// Output: "A"
// Example 2:

// Input: columnNumber = 28
// Output: "AB"
// Example 3:

// Input: columnNumber = 701
// Output: "ZY"
 

// Constraints:

// 1 <= columnNumber <= 231 - 1

// Solution:
function convertToTitle(columnNumber: number): string {
    let title = ''

    for (let i=1; i<10; i++){
        let digit = columnNumber % 26**(i)
        if (digit===0) digit = 26**i    //mod26 = 0 is just 26 remainder
        let remainder = digit/26**(i-1)
        // console.log(digit, remainder, columnNumber)
        title = String.fromCharCode(64+remainder)+ title
        columnNumber -= digit
        
        if (columnNumber===0) break
    }

    return title
};


//given integer
//retrun corresponding coolumn title as appears in excel sheet
//basically base 26 with numbers
//1->A
//26->Z
//28->AB
//701->ZY 26*26+25. 702->ZZ 703->AAA.  703 / 702 = 1.111. 
//up to 2^31

//maybe need to go through each column
//ZY = 26*26 + 1*26
//ZZ = 26*26 + 26
//AAA = 26*26*1 + 26 + 1 //how to move from ZZ to AAA

//26-> Z. 27-> AA. 26/1 = 0 therefore Z. but once you go to the next digit its 26/26 

//num %26 to find the remainder. then remainder / 1 
//702 % 26^2 get 26. ->/26-> 1
//676 % 26^3 get 676 ->/26^2 -> 1

//char code 65 - 90 
