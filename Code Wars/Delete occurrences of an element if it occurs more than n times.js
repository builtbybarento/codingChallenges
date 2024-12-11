// 6 kyu - Delete occurrences of an element if it occurs more than n times

// Description - 
// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// Solution - 

function deleteNth(arr,n){
    let hash = new Map()
    return arr.reduce((result,num)=>{
      if (`${num}` in hash){       //if key exists
        if(hash[num] < n){        //key less than n, keep pushing. else nothing
          hash[num] += 1
          result.push(num*1)
        }
      }else{                      //or if key doesnt exist yet, push it and add the key
        hash[num] = 1 
        result.push(num*1)
      }
      return result
    }, [])
   
  }
  deleteNth([20,37,20,21], 1)
  
  //take in an array of numbers and a pos int
  // resulting array should delete excess repeats of every number, with a maximum of n repeats
  //ie [1,1,1,1,2,2,2,3], 3 ===> [1,1,1,2,2,2,3]
  
  //check number. if not in list, add to list. if in list and less than 3, add 1. if more than 3, ignore
  //use reduce method? 
  
  //before refactoring:
  
  // let hash = new Map()
  // let result = []
  // //   arr.forEach(num=> {
  // //     if (`${num}` in hash){       //if key exists
  // //       if(hash[num] < n){        //key less than n, keep pushing. else nothing
  // //         hash[num] += 1
  // //         result.push(num*1)
  // //       }
  // //     }else{                      //or if key doesnt exist yet, push it and add the key
  // //       hash[num] = 1 
  // //       result.push(num*1)
  // //   }})