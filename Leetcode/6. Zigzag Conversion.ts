// 6. Zigzag Conversion - Medium 

// Description:

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// Solution: //optimized 

function convert(s: string, numRows: number): string {
    //generate the pattern array length. 0 1 2 3 2 1 
    const patternLength = numRows + (numRows>2 ? numRows-2 : 0)

    //Now create arrays for each row while circularly iterating through the pattern 
    //Instead of iterating use rem and 2*numRows-2-rem (or numRows-2-(rem-numRows))
    let ans: string[] = []
    for (let i=0; i<s.length; i++){
        if (ans.length<numRows){
            ans.push(s[i])
        }else{
            let rem = i%patternLength
            rem<numRows ? ans[rem]+= s[i] : ans[2*numRows-2-rem] += s[i]
        }
    }
    return ans.join('')
};


//3 rows - 3 arrays
//1.push[s[i]], then 2.push[s[i]], then 3.push[s[i]], then 2.push[s[i]] repeating. 
//easy to implement that but how do we define the pattern 1 2 3 2 
//5 rows would be 1 2 3 4 5 2 4. i guess all numbers + odds
//or 0 1 2 3 4 1 3. so all numbers + odds.


//maybe instead of making the pattern array just look at the remainder. 
//0 1 2 3 4 1 3. so the pattern length is numRows + numRows>2 ? numsRows-2 : 0
//i%patternlength <numRows ? push to arr[patternlength] : i%patternlength / 2 + 1 ? 
//remainder = 5 or 6. (rem-numRows) = 0 or 1. numRows-1-(rem-numRows)

//My first solution making the pattern into an array first: 

function convert2(s: string, numRows: number): string {
    //generate the pattern array. 0 1 2 3 2 1 
    let pattern = [0]
    while (pattern.length<numRows){
        pattern.push(pattern[pattern.length-1] +1)
    } //generate base array 0 1 2 for a numRows=3
    for(let i = numRows-2; i>0; i--){
        pattern.push(i) //add zigzag pattern
    } 

    //Now create arrays for each row while circularly iterating through the pattern 
    let count = 0
    let ans: string[][] = []
    for (let i=0; i<s.length; i++){
        if (ans.length<numRows){
            ans.push([s[i]])
        }else{
            ans[pattern[count]].push(s[i])
        }
        count = count===pattern.length-1? 0 : count+1
    }
    
    return ans.map(x=>x.join('')).join('')
};
