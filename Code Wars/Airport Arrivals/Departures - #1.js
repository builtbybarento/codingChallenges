// 5 kyu - Airport Arrivals/Departures - #1

// Description:
// You are at the airport staring blankly at the arrivals/departures flap display...


// How it works
// You notice that each flap character is on some kind of a rotor and the order of characters on each rotor is:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789

// And after a long while you deduce that the display works like this:

// Starting from the left, all rotors (from the current one to the end of the line) flap together until the left-most rotor character is correct.

// Then the mechanism advances by 1 rotor to the right...

// ...REPEAT this rotor procedure until the whole line is updated

// ...REPEAT this line procedure from top to bottom until the whole display is updated

// Example
// Consider a flap display with 3 rotors and one 1 line which currently spells CAT

// Step 1  (current rotor is 1)
// Flap x 1
// Now line says DBU
// Step 2  (current rotor is 2)
// Flap x 13
// Now line says DO)
// Step 3  (current rotor is 3)
// Flap x 27
// Now line says DOG
// This can be represented as

// lines  // array of strings. Each string is a display line of the initial configuration
// rotors // array of array-of-rotor-values. Each array-of-rotor-values is applied to the corresponding display line
// result // array of strings. Each string is a display line of the final configuration
// e.g.

// lines = ["CAT"]
// rotors = [[1,13,27]]
// result = ["DOG"]
// Kata Task
// Given the initial display lines and the rotor moves for each line, determine what the board will say after it has been fully updated.

// For your convenience the characters of each rotor are in the pre-loaded constant ALPHABET which is a string.

// Solution: 

var flapDisplay = function(lines, rotors) {
      function transformLine (line, rotor){
        let startArr = line.split('')
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789".split('')
        
        for(let i=0; i<startArr.length; i++){
          const flips = rotor.slice(0,i+1) //first one has 1 flip, 2nd has 2, etc.
          const letterIndex = chars.indexOf(startArr[i])
          let newLetterIndex = (letterIndex + flips.reduce((acc,x)=>acc+x,0))%chars.length
  
          startArr.splice(i, 1, chars[newLetterIndex]) //replace the letter with the new letter
        }
      return startArr.join('')
      }// this works, but on 1 lines at a time only.

    let result = []
    for(let i=0; i<lines.length; i++){
      let newLine = transformLine(lines[i], rotors[i])
      result.push(newLine)
    }
    return result
  }
  var before = ["CAT"]
  var rotors = [[1,13,27]]
  flapDisplay(before, rotors) ///['DOG']
  //input is a starting word and an array of numbers representing the sequence of flaps
  //must return the output word after the flaps have occurred in order.
  
  //ex CAT, 1 flap => DBU, 13 flaps => DO_ => DOG
  
  //loop through the original word.
  //add rotors[0] to the index of each letter and find the new letter
  //first flip all the letters, then flip only the letters above i
  
  //first letter multiplied by first rotor
  //second letter multiplied by first rotor and second rotor
  //third multiplied by first second third rotor