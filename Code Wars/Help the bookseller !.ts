// 6 kyu - Help the bookseller !

// Description:
// A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

// Task
// You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

// Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

// If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

// Example
// # the bookseller's stocklist:
// "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

// # list of categories: 
// "A", "B", "C", "W"

// # result:
// "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
// Explanation:

// category A: 20 books (ABART)
// category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
// category C: 50 books (CDXEF)
// category W: 0 books

// Solution:

export const stockList = (listOfArt:string[], listOfCat:string[]):string => {
  if (listOfArt.length === 0 ) return ''
  let ans : string[] = []
  listOfCat.forEach(cat=>{
    let stock: number [] = listOfArt.filter(x=>x[0]===cat).map(x=> Number(x.split(' ')[1])) 
    let count : number = stock.reduce((acc, x)=> x + acc, 0)
    ans.push(`(${cat} : ${count})`)
  })
  return ans.join(' - ')
}

//given array of stock [asd 13] [code number-in-stock]
//return the total number of books in the stocklist with the corresponding category code
//ex. ABART 20, CDXER 50  ,  "A""B""C" "R"===>  "(A: 20) - ("B": 20) - ("C": 50) - ("R" - 70)"

//just need to make a list for each code of the corresponding arrays with filter
//then isolate the numbers and add them up 
//add to the answer string 