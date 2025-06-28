// 5 kyu - Lazy Repeater

// Description:
// The makeLooper() function (or make_looper in your language) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.

// For example:

// var abc = makeLooper('abc');
// abc(); // should return 'a' on this first call
// abc(); // should return 'b' on this second call
// abc(); // should return 'c' on this third call
// abc(); // should return 'a' again on this fourth call
// Different loopers should not affect each other, so be wary of unmanaged global state.

// Solution:

export function makeLooper(str: string): () => string {
  let count = str.length-1
  return () => {
    count = (count+1)%str.length //starts back at 0 if it reaches the length of the array
    return str[count]
  };
}
//input a string
//returns a function
//the function retruns successive characters of the string on successive invocations
//ie make a function from "example". first call gives "e" second "x" third "a" etc until it goes back to the beginning. 