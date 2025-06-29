// 4 kyu - Sum of Intervals

// Description:
// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

// Solution: 

export function sumOfIntervals(intervals: [number, number][]) {
  intervals.sort((a,b)=>a[0] - b[0])
  for (let i=0; i<intervals.length; i++){
    let overlapIndex = i+1  + intervals.slice(i+1).findIndex(x => x[0] >= intervals[i][0] && x[0] <= intervals[i][1]) 
    //overlapIndex will be i-1 if nothing exists, else it will find the closest overlapping index between i[0] and i[1]
    if (overlapIndex>i){//if found 
      let newInterval:[number,number] = [Math.min(intervals[i][0], intervals[overlapIndex][0]), Math.max(intervals[i][1], intervals[overlapIndex][1])]
      intervals.splice(i, 1, newInterval) //replace the first interval with the new interval
      intervals.splice(overlapIndex, 1) //delete the other interval
      i-- //try again until nothing overlaps 
    }
  }
  return intervals.reduce((acc,x)=>acc+x[1]-x[0], 0)
}
//input an array of intervals [[1,2], [3,4]]
//return the sum of all the interval lengths
//intervals can overlap. ie 1,4 ; 7,10; 3,5. the sum of the lengths of these intervals is 7
    //1,4 and 3,5 overlap so it can be treated as 1,5. 

//just need a way to simplify all the intervals before reducing 
//example 1,10; 5,20; 10,30; 50,100
//starting from 1,10. check if any other intervals start under 10 and over 1. 
  //5,20 starts between 1 and 10
  //combine the two arrays. take Math.min(1,5) to Math.max(10, 20)
//now check again. just checking for the first number. 10 fits between 5,20 so combine those arrays with a splice
//now check again. nothing else fits beween 10,30
//move to next number. 50, 100. nothing fits between them 

//ok now say it was opposite direction 50,100; 10,30; 5,20; 1,10
//nothing starts 50-100
//10 nothing starts 10-30
//5 nothing starts 5-20
//1,10 matches with 10,30
//remove 10,30 and 1,10, replace with 1,30
//try again. replace 5,20 and 1,30 with 1,30
//this works better if its sorted by the starting numbers. then i dont have to worry about the index changing 
//should start by sorting the intervals. then just check the array starting at the next interval