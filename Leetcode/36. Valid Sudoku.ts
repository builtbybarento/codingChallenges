// 36. Valid Sudoku - Medium 

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 

// Example 1:


// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

// Solution:

function isValidSudoku(board: string[][]): boolean {
    let row: Set<string> = new Set()
    let columns: Set<string>[] = new Array(board.length).fill(null).map(()=>new Set<string>())
    let squares: Set<string>[] = new Array(board.length/3).fill(null).map(()=>new Set<string>())
    for (let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            let space = board[i][j]
            if (space==='.') continue //skip empty spots
            if (row.has(space) || columns[j].has(space) || squares[Math.floor(j/3)].has(space)){
                //console.log(row, columns, squares, space)
                return false
            }
            row.add(space)
            columns[j].add(space)
            squares[Math.floor(j/3)].add(space)
        }
        row = new Set() //reset the row
        if(i%3===2) squares = squares.map(()=>new Set<string>())//reset the squares every 3 rows
    }
    return true
};

//just need to check that all the rows are not adding up to 9 and all the columns are unique and all the squares are unique
//to check the row, keep track of the current row. 
//to check the squares, keep track of the current squares for every 3 rows
//to check the columns... might need another set to keep track of the columns
//so 1 set for the current row (easy)
//1 array of sets for the current square. 1 array for every 3 squares. resets every 3 rows
//1 array of sets for the current columns. 1 array per column
//0/3, 1/3, 2/3 = floor.0 so each column 