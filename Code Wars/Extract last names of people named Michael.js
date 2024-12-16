// 6 kyu - Extract last names of people named Michael

// Description:
// Given a text, for example:

// const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

// get an array of last names of people named Michael. The result should be:
// ["Jordan", "Johnson", "Green", "Wood"]

// Notes:

// First name will always be Michael with upper case 'M'.
// There will always be a space character between 'Michael' and last name.
// Last name will always be one word, starting with an upper-case letter and continuing with lower-case letters.
// There will always be at least one 'Micheal' with a valid last name in the input text.

// Solution: 

function getMichaelLastName(inputText) {
    let arr = inputText.split(' ')
    let result = []
    for(let i=0; i<arr.length; i++){
      if(arr[i]=="Michael" && !result.includes(arr[i+1]) && arr[i+1][0] === arr[i+1][0].toUpperCase()){
        let lastName = arr[i+1]
        if (lastName[lastName.length-1] == lastName[lastName.length-1].toUpperCase()) lastName = lastName.split('').slice(0,lastName.length-1).join('')
        result.push(lastName)
      } 
    }//add condition
    return result
  }
  const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
  
  getMichaelLastName(inputText);// ["Jordan","Johnson","Green","Wood"]
  //input string
  //output array of last names of people named Michael
  //ie 'michael jackson, joe johnson, and michael louis' ====> [jackson, louis]
  //always "Michael <last_name>"
  
  ////find all the times michael is said. 
  //convert to an array
  //check the word after michael. add it to array 
  
  
  //hhow do we make sure the last name is listed afterwards and not a punctuation? 
  //must be capitalized and rest of letters are lower case
  //