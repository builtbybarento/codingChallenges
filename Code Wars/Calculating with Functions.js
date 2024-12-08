// 5kyu - Calculating with Functions
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


// Solution: 


function zero(op) {
    if(!op) return 0                                //if no input just return num
    return op[0] == 'plus' ?  0 + op[1]             //else depending on the input do the proper operation
      : op[0] == 'minus' ?  0 - op[1] 
      : op[0] == 'times' ?  0 
      : op[0] = 'dividedBy' ? 0 
      : null
  }
  function one(op) {
    if(!op) return 1
    return op[0] == 'plus' ?  1 + op[1] 
      : op[0] == 'minus' ?  1 - op[1] 
      : op[0] == 'times' ?  1 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(1 / op[1])
      : null
  }
  function two(op) {
    if(!op) return 2
    return op[0] == 'plus' ?  2 + op[1] 
      : op[0] == 'minus' ?  2 - op[1] 
      : op[0] == 'times' ?  2 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(2 / op[1])
      : null
  }
  function three(op) {
    if(!op) return 3
    return op[0] == 'plus' ?  3 + op[1] 
      : op[0] == 'minus' ?  3 - op[1] 
      : op[0] == 'times' ?  3 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(3 / op[1])
      : null
  }
  function four(op) {
    if(!op) return 4
    return op[0] == 'plus' ?  4 + op[1] 
      : op[0] == 'minus' ?  4 - op[1] 
      : op[0] == 'times' ?  4 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(4 / op[1])
      : null}
  function five(op) {
    if(!op) return 5
    return op[0] == 'plus' ?  5 + op[1] 
      : op[0] == 'minus' ?  5 - op[1] 
      : op[0] == 'times' ?  5 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(5 / op[1])
      : null}
  function six(op) {
    if(!op) return 6
    return op[0] == 'plus' ?  6 + op[1] 
      : op[0] == 'minus' ? 6  - op[1] 
      : op[0] == 'times' ? 6 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(6 / op[1])
      : null}
  function seven(op) {
    if(!op) return 7
    return op[0] == 'plus' ?  7 + op[1] 
      : op[0] == 'minus' ?  7 - op[1] 
      : op[0] == 'times' ?  7 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(7 / op[1])
      : null}
  function eight(op) {
    if(!op) return 8
    return op[0] == 'plus' ?  8 + op[1] 
      : op[0] == 'minus' ?  8 - op[1] 
      : op[0] == 'times' ?  8 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(8 / op[1])
      : null}
  function nine(op) {
    if(!op) return 9
    return op[0] == 'plus' ?  9 + op[1] 
      : op[0] == 'minus' ? 9 - op[1] 
      : op[0] == 'times' ? 9 * op[1]
      : op[0] = 'dividedBy' ? Math.floor(9 / op[1])
      : null}
  
  function plus(num) {                          //simply takes in a number as an input and returns an array of the input number and the selected operation as a string.
    return ['plus', num]                        //the actual operation is taken care of in the number functions. 
  }
  function minus(num) {
    return ['minus', num]
  }
  function times(num) {
    return ['times', num]
  }
  function dividedBy(num) {
    return ['dividedBy', num]
  }
  
  
  nine(plus(one())) //10
  
  
  
  //must take in other function. number must take an operation and vice versa. Or nothing
  //must be able to use three functions to create an equation and result the output. 
  //eight(dividedBy(three())) should give 2 (Math.floor(8/3))
  
  //need  a variable to define as 1
  //needs to take in the output of the previous 
  
  //if num doesnt take input then just return num
  //if num takes the input, depending on what the previous input was do the appropriate operation
  //operation just returns the last num and the operation, the num function does the workk
  
  
  //function one() {  / // need a 
  //    let one = 1
  //    
  //    }


  //in hindsight, should have just made the functions to output a function 