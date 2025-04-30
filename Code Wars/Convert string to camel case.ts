// 6 kyu - Convert string to camel case

// Description:

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// Solution:

export function toCamelCase(str:string):string{
    while(str.includes('-')){
      str = str.replace('-', '_')
    }
    let arr= str.split('_')
    for(let i=1; i<arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('')
  }
  
  //need to first consolidate _ and - 
  //just replace all - with _ 
  //then we can just loop through the array and change the first letter of each item, starting at 1
  //to change the first letter, will need to turn into array and change item[0] to item[0].toUpperCase
  //then join the array