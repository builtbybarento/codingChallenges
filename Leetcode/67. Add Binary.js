// 67. Add Binary - Easy

// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

 

// Constraints:

//     1 <= a.length, b.length <= 104
//     a and b consist only of '0' or '1' characters.
//     Each string does not contain leading zeros except for the zero itself.

// Solution: 
// (will refactor later but still proud of this solution)

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let c = a.length > b.length ? a : b           //make sure a is the bigger number and always add smaller to bigger so there are no undefined indices
  let d = a.length > b.length ? b : a

  console.log("a " + c)
  console.log("b " + d)
  c = c.split('').reverse()
  d = d.split('').reverse()



  const flip= (x,i) => {        //flip the inpu
      console.log(x, x[i])
      x[i]==='1' ? x[i] ='0' : x[i] ='1'
      if(x[i]==='0' && x[i+1]){        //if the number is 0 after the flip and there is a next digit then flip the next digit too until a 1 is left
              flip(x, i+1)           
      }else if (x[i]==='0'){            //if there is no next number to flip just add a 1
          x.push('1')
      }
  }

  for(let i=0; i<d.length; i++){
      //for every letter in b
      if (d[i]==='1'){
          flip(c, i)
      }   //whereever the digit===1 is where there is a pow2 value that can be transferred.=
  }

  return c.reverse().join('')
};

//take the first digit