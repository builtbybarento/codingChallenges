// 6 kyu - Count the days!

// Description:
// Little Annie is very excited for upcoming events. She wants to know how many days she has to wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!"
// If the event is today, return "Today is the day!"
// Else, return "x days"

// Solution:

function countDays(d){
    let days = Math.round((d - new Date())/(1000*60*60*24))
    return days < 0 ? 'The day is in the past!' : days == 0 ? 'Today is the day!' : days + ' days'
 }
 countDays(new Date('December 31, 2511'))
