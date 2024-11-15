// Description:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let xes = 0
    let oes = 0
    str.toLowerCase().split('').forEach(e=>{
      if(e=='x'){
        xes+=1
      }else if(e=='o'){
        oes+=1
      }
    })
    return xes === oes
}

//not great in hindsight, can be made more efficient with .filter()