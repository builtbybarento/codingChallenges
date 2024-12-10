// 4 kyu - Next smaller number with the same digits

// Description: 
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

// Solution: 

function nextSmaller(n) {
  
    let arr = String(n).split('')
  //   console.log(arr) 
    
    if (arr.join('') == arr.slice(0).sort((a,b)=>a-b).join('')){ //doesn't work if two arrays are equal, must make string
      return -1
    }
    
    for(let i=arr.length-2; i>= 0; i--){   //start .length-2
      let lastDigits = arr.slice(i)
  //     console.log("Last digits: " + lastDigits)
      
      //if equal just continue the loop. else if: 
      if (lastDigits.join('') != lastDigits.slice(0).sort((a,b)=>a-b).join('')){
  //       console.log("Reduce this!") //last digits are not sorted lowest to highest then it can be rearranged to a smaller number
        //now we can transform last digits and leave the starting digits alone. 
        
        let firstDig = lastDigits[0] //the first digit of the new array that will be transformed
        lastDigits.sort((a,b)=> b-a) //highest to lowest
  //       console.log("In order: " + lastDigits)
        
        //to reorder a number such as 2017, must make first digit the next lowest integer
        let newFirstDigIndex = lastDigits.findIndex(x=> x<firstDig) //find lowest number less than the first digit
  //       console.log('new first dig is' + lastDigits[newFirstDigIndex])
  //       console.log(newFirstDigIndex + " new first dig index")
        
        //now add the new digit to the front and remove from where it was
        lastDigits.unshift(lastDigits[newFirstDigIndex])   //add digit
        lastDigits.splice(newFirstDigIndex+1, 1)    //remove digit
  //       console.log(lastDigits)
  //       console.log(lastDigits[newFirstDigIndex])
        
        //now give go back to the full number and replace those digits with lastDigits
        arr.splice(i, lastDigits.length, ...lastDigits) //starting at i, replace the last digits and return output
        if(arr[0]=='0') return -1
        return arr.join('')*1
      }
      
    }
  }
  nextSmaller(2017) //1720
  
  
  
  //takes in positive integer
  //return the next smaller positive integer containing the same digits. 
  //ie 531 ==> 513
  //return -1 if no possible answer
  
  //if no possible answer, the digits must already be in order highest to lowest
  //if String(n) == String(n).split('').splice(0).sort((a,b)=>a-b).join('')
  
  //must check back to forwards if the digits can be rearranged lowest to highest
  // ie 2017 => check 1 and 7 => check 0 1 7 => check 2 0 1 7 => 1 7 2 0 
  
  //to reorder a number such as 2017, must make first digit the next lowest integer
  //rest of digits are in order highest to lowest
  //make the digits in order. then find the last digit that is less than the first digit of lastDigits
  