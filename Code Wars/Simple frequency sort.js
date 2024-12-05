// 6 Kyu - Simple frequency sort

// Description:
// In this kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.
// More examples in test cases.

// Good luck!




//  Solution: 
 
function solve(arr){
    let mymap = {}
    for (let i = 0; i < arr.length; i++){
      if(Object.keys(mymap).includes(arr[i].toString())){
        mymap[arr[i]] += 1 
  //       console.log(mymap)
      }else{
        mymap[arr[i]] = 1 
      }
    }
    
  ////need to take the results and sort them
    
    let values = []
    Object.keys(mymap).forEach(x=> values.push(mymap[x]))
  //   console.log(values)
    values = values.reduce((acc,x)=>{
      !acc.includes(x) ? acc.push(x) : acc
      return acc
    }, []) // remove duplicates
    values.sort((a,b)=> b-a)
  //   console.log(values) // sorted values
  
    arr.sort((a,b)=>a-b)
  //   console.log('arr ' + arr)
  ////then make the solved array 
    
    let result = [] 
    
  ////for each value, check every property and see if they have a matching value pair.   
    values.forEach(val=>{
      for(let i=0; i<arr.length; i++){
         if(mymap[arr[i]] == val) result.push(arr[i])
  //       console.log(result)
      }
    })
    
    return result
  }
  solve([2,2,2,3,7,9,5,3,7])











  ////alt solution, i cheated on this one

  function solve(arr){

////make object to map the number of times each item shows up
    const obj = {}
    for(let i=0; i<arr.length; i++){ 
      if(obj.hasOwnProperty(arr[i])){
        obj[arr[i]] += 1
      }else{
        obj[arr[i]] = 1
      }
    }
////sorts the array by their paired values. when paired values are the same, it sorts by the initial value
  return  arr.sort((a,b)=> obj[b] === obj[a] ? a-b: obj[b]-obj[a]) 
  }