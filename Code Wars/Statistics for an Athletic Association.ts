// 6 kyu - Statistics for an Athletic Association

// Description: 

// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

// To compare the results of the teams you are asked for giving three statistics; range, average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

// Solution:

export const stat = (s:string): string => {
  const rawArray: string[] = s.split(', ')
  console.log(rawArray)
  //should have ['01|15|59', '1|47|6', '01|17|20']
  const splitArray: number[][] = rawArray.map(x=>x.split('|').map(x=>Number(x)))
  console.log(splitArray)
  //should return [[1, 15, 59],[1,47,6]]
  const secondsArray: number[] = splitArray.map(x=>x[0]*3600 + x[1]*60 + x[2]).sort((a,b)=>a-b)
  console.log(secondsArray)
  //should return [20304, 23003]
  const range: number = secondsArray[secondsArray.length-1] - secondsArray[0]
  //range in seconds
  const average: number = Math.floor(secondsArray.reduce((acc,x)=>acc+x,0)/secondsArray.length)
  //average in seconds, rounded to nearest integer
  const median: number = secondsArray.length%2===1 ? secondsArray[Math.floor(secondsArray.length/2)] : Math.floor((secondsArray[secondsArray.length/2]+secondsArray[secondsArray.length/2 - 1])/2)
  console.log("median", median)
  console.log(stringify(average))
  
  return `Range: ${stringify(range)} Average: ${stringify(average)} Median: ${stringify(median)}`
}

  
function stringify(num: number): string{
   return `${String(Math.floor(num/3600)).padStart(2, '0')}|${String(Math.floor((num%3600)/60)).padStart(2, '0')}|${String((num%3600)%60).padStart(2, '0')}`
}
