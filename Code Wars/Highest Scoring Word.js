// 6 kyu- Highest Scoring Word

// Description:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Solution:

function high(x){
  const alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v', 'w', 'x','y','z'];
  function score(word){
    return word.split('').reduce((acc,z)=>acc + alphabet.indexOf(z), 0) //add each letter's score and return it
  }
  
  let highScore = ''
  let arr = x.split(' ')
  for(let i=0; i<arr.length; i++){
    if (score(arr[i]) > score(highScore)){
      highScore = arr[i]
    }
  }
  return highScore
  }
//input string of words and return the word with the highest score
//scoring is according to each letter's position in the alphabet. jesus
//make an array to store all the letters
//loop through the array. check if the current word is higher than the first. if so then this is the new index to reference
//want to note the highest word and its score