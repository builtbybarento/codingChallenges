// 6 kyu - Remove the parentheses

// Description:
// Remove the parentheses
// In this kata you are given a string for example:

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

// Solution:

function removeParentheses(s){
    while(s.includes('(')){
        let right = s.indexOf(')')
        let left = s.slice(0, right).lastIndexOf('(')
        s = s.slice(0, left) + s.slice(right+1)
      }
    return s
  }

  //need to find the parenthesis in the string
      //find the index of ( and )
      //reverse find index of ( in s.slice(0, right).
  
  //need to remove the part of the string 
  
  //need to check until there are no more parentheses
  
  
  //how to tell if there are multiple groups of parentheses???
  //first check for )
  //then check for ( starting from index of )