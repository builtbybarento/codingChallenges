// 7 kyu - The Pony Express

// Description -

// A History Lesson
// The Pony Express was a mail service operating in the US in 1859-60.

// Pony Express
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// Solution: 

function riders(stations) {
  let stamina = 100
  let count = 1
  for(let i=0; i<stations.length; i++){
    if (stamina<stations[i]){
      count+=1
      stamina = 100
    }
    stamina -= stations[i]
  }
  return count
}