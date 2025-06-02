// 6 kyu - Tortoise racing

// Description:
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

// Solution:

export function race(v1 : number, v2 : number, g : number) : [number, number, number] | null {
  if (v1>=v2) return null  
  let total = 3600*g/(v2-v1) //total time in seconds
  let hours = Math.floor(total/3600)
  let minutes = Math.floor(total/60%60)
  let seconds = Math.floor(total%60)
  return [hours, minutes, seconds]
}


//find time for v1 to catch up 

//v2-v1= diff in speed
//find how many hrs to cover the distance
//70ft with 100ft/hr 70/100 = 0.7h 

//0.5025hrs = 30.5mins = 1830seconds 