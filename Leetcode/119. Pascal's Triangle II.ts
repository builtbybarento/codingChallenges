// 119. Pascal's Triangle II - Easy

// Description:

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33
 

// Follow up: Could you optimize your algorithm to use only O(rowIndex) extra space?

// Solution:

function getRow(rowIndex: number): number[] {
    let row = [1]
    while (rowIndex>0){
        let newRow: number[] = []
        for(let i=0; i<=row.length; i++){
            newRow.push((row[i-1]||0) + (row[i]||0))
        }
        row = newRow
        rowIndex--
    }
    return row
};