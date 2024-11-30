// 6 Kyu - Stop gninnipS My sdroW!

// Description - 

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test

// Solution:

function spinWords(str){
    str = str.split(' ')
    for(let i=0; i<str.length; i++){ //didnt work with forEach
      if (str[i].length>4){ //if string is 5 or more letters
        str[i] = str[i].split('').reverse().join('') //reverse the string
        console.log(str[i]) //test the string reversed correctly
      }
      console.log(str) //test the reversed string is placed in the array properly
    }
    return str.join(' ')  //return string
  }
  spinWords("hello my fellow warriors") //['olleh', 'my', 'fellow', 'warriors'] 