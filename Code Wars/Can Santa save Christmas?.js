// 7 kyu - Can Santa save Christmas?

// Description:

// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// Solution:

function determineTime (durations) {
    return 24>= durations.reduce((acc,x)=>{
      x=x.split(':')
      return acc+Number(x[0])+Number(x[1])/60 + Number(x[2])/3600
      
    }, 0)
    
  
  }
  determineTime(['04:30:00', '02:00:00', '01:30:0', '16:00:00'])
  
  //hours = x[0]+x[1]
  //minutes = x[3]+[4]
  //seconds = x[6]+x[7]