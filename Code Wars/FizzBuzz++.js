// 6kyu - FizzBuzz++


// Description:
// There is a common problem given to interviewees in software, called FizzBuzz. It works as follows: for the numbers between 1 and 100, print "fizz" if it is a multiple of 3 and "buzz" if it is a mutiple of 5, else print the number itself.

// You are in an interview and they ask you to complete fizzbuzz (which can be done in a one-liner in a few langs) and you knock it out of the park.

// Task
// Surprised by your ability, the interviewer gives you a harder problem. Given a list of coprime numbers, (that is that the greatest common divisor of all the numbers = 1) and an equally sized list of words, compute its fizzbuzz representation up until the pattern of strings repeats itself.

// Notes:

// Your function should return a list/array, not print it.
// The list of numbers should start from 1.
// The strings are always concatenated from left to right in the appearance of the given list of words.
// The list of numbers may not always be sorted - just use the given order of the numbers.
// All numbers in the first array will always be coprime. This is a safe assumption for your program.
// The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat after this point.
// Hint: What is the relation to the numbers given in the list and the length of the list?

// Example
// fizzbuzz_plusplus([2, 3, 5], ['fizz', 'buzz', 'bazz'])
// should return

// [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

function fizzbuzzPlusPlus(numbers, words) {
  let result = [] 
  let max = numbers.reduce((acc,x)=>acc*x, 1)
  for(let i=1; i<=max; i++){
    let word = ''
    for(let j=0; j<numbers.length; j++){
      if (i%numbers[j]===0){ //if the current number is divisible by any of the numbers in the input 
        word += words[j] //add the corresponding word to our word variable       
      }
    }
    if(word.length>0){
      result.push(word)
    }else{
      result.push(i)
    }
  }
  return result
}

//given a list of coprime numbers (the greatest common divisor of all the numbers is 1) and an equally sized list of words, sompute its fizzbuzz representation up until
//the pattern of strings repeats itself
//start at 1
//so basically custom fizz buzz with more than just 3 and 5 
//go from 1 to product of all the numbers multiplied together
//first check if divisible by first num. ans += words[corresponding]
//second check if divisible by second num. append the corresponding word to the ans if so
//check the rest of the nums and append whatever is necessary
//if nothing was appended push the number 