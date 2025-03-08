// 6 kyu - Roman Numerals Decoder

// Description: 

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Solution: 

function solution (roman) {
  // complete the solution by transforming the 
  // string roman numeral into an integer
  const vals = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500, 
    M : 1000
  }
  let total = vals[roman[roman.length-1]]
  for(let i=0; i<roman.length-1; i++){
      if (vals[roman[i]]< vals[roman[i+1]]){ //if val of the item at i is less than the next value subtract it
        total -= vals[roman[i]]
      }else{
        total += vals[roman[i]]
      }

  }

	return total;
}


//CM =900
//XC=90
//XL=40 

//MDXLXVI
//M D (X) L X V I

//MC is 1100
//CM is 900 
//only if its before then its minus