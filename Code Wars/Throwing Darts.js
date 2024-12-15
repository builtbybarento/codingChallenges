//  6 kyu - Throwing Darts

//  You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140

// Solution:

function scoreThrows(radii){
    //   let bonus = 0
    //   if(radii.length == radii.filter(x=>x<5).length && radii.length > 0) bonus +=100
      const bonus = () => radii.length> 0 && radii.length == radii.filter(x=>x<5).length ? 100 : 0
      return bonus() + radii.reduce((acc,x)=> x<5 ? acc+10 : x<= 10 ? acc+5 : acc ,0)
    }
    scoreThrows([1,3,1])
    
    //takes in array of integers and or floats representing radii
    //return total score using scoring specifications
    // over 10 is 0 points, 5-10 is 5 points, less than 5 is 10 points
    //ie [1,5,11] ===> 15
    
    //have to check each item in the array
    //add each score up and return.
    //too easy with .reduce
    //add bonus if thows all under 5
        //if number of throws under 5 == number of throws