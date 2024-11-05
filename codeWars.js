// https://www.codewars.com/users/barento - more on my profile. 


// 6 kyu Make the Deadfish Swim
//         JavaScript
//         Description:
//         Create a parser to interpret and execute the Deadfish language.

//         Deadfish operates on a single value in memory, which is initially set to 0.

//         It uses four single-character commands:

//         i: Increment the value
//         d: Decrement the value
//         s: Square the value
//         o: Output the value to a result array
//         All other instructions are no-ops and have no effect.

//         Examples
//         Program "iiisdoso" should return numbers [8, 64].
//         Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

//Solution
        function parse( data ){
            if (!data.includes('o')) return []
            
            let ind = data.split('').findLastIndex((element) => element == 'o')
            let newData = data.slice(0, ind)
            
            console.log(newData)
            
            //now the code has removed everything that doesnt get pushed into the array. might have been unnecessary depending on the test cases presented but I'm not sure
            
            newData = newData.split('o')
            
                console.log(newData)
            
            let result = []
            let val = 0
            newData.forEach(x=>{
                
                for(let i = 0; i<x.length; i++){
                x[i] == 'i' ? val+= 1 : x[i] == 'd'  ? val -= 1: x[i] == 's' ? val *= val : val+= 0
                }
                result.push(val)
            })            
            return result
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5 kyu Perimeter of squares in a rectangle https://www.codewars.com/kata/559a28007caad2ac4e000083
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216

function perimeter(n) {
    let arr = [1]
    for(let i=0; i<n; i++){
      arr.push(arr[i]+arr[i-1]||1)  //add two side lengths
    }
   return arr.reduce((acc,x)=>acc+x*4, 0)
 }

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6 kyu Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}

function count(string) {
    const solution = {}
    string.split('').forEach(x=>{
      (solution[x]) ? solution[x] += 1 : solution[x] = 1
    })
    return solution;
  }
  
  count('aba') //test returns {a: 2, b: 1}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7 kyu  Return a sorted list of objects
  
//   Description:
//   You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

// Example
// When sorted by "a", this:

// [
//   {"a": 1, "b": 3},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 4, "b": 12}
// ]
// should return:

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]
// The values will always be numbers, and the properties will always exist.

function sortList (sortBy, list) {
  list.sort((a, b) => b[sortBy] - a[sortBy] )
  return list
}

// 7 kyu  Growth of a Population
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
function nbYear(p0, percent, aug, p) {
let pop = p0
let count = 0
while(pop<p){
  pop = Math.floor(pop +  pop * percent / 100 + aug)
  count++
}
return count
}