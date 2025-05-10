// 8 kyu - Grasshopper - Terminal game move function

// Decsription:

// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

// Solution:

export function move(pos: number, roll: number): number {
  return pos+roll*2
}


//take a linear position asa number and a dice roll
//return the new position. the dice moves the position by 2x the value of the roll. 
//3,6 should equal 3+12=15 

