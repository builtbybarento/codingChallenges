// 7 kyu - List Filtering

// Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// Solution:

function filter_list(list){
    return list.filter(x=>typeof x == "number")
  }
  
  filter_list([1,'a','b',0,15])
               

  
  ////  I wrote this when i first started trying 7kyus. In hindsight this code was hilariously bad and I'm keeping this for memories             
  // function filter_list(l) {
  //   let result = []
  //   for (let i=0, o=0; i<l.length; i++, o++){
  //     if(l[i]>0||l[i]<=0){
  //       result[o] = Number(l[i])
  //     }else{
  //       o-=1
  //     }
  //   }
  //   return result
  // }        