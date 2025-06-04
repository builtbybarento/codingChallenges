// 6 kyu - Meeting

// Description:
// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

// Solution:

export function meeting(s: string): string {
    let nameList = s.toUpperCase().split(';')
    console.log(nameList) //['FRED, CORWILL']
    nameList = nameList.sort() //should sort by first name
    nameList = nameList.map(name=>name.split(':').reverse().join(', '))
    console.log(nameList)
    nameList.sort() //now sort by last name
    return nameList.map(name=>`(${name})`).join('')
}

//make the string uppercase (easy)
// split the names by ; 
//split each name by : and reverse the order
//should have an array of arrays with the names in lastname, firstname order
//then take each name and split with a comma ', ' 
//should be ['CORWILL, ALFRED', 'CORWILL, FRED']
//console.log here
//now sort based on the first letter of each firstname
//then sort based on the first letter of each surname
//finally, map to add brackets and join

//REFACTORED:

export function meeting(s: string): string {
    return s.toUpperCase()
      .split(';')
      .map(name=> '(' + name.split(':').reverse().join(', ') + ')')
      .sort()
      .join('')
}