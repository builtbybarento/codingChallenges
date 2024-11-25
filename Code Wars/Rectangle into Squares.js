    // 6 Kyu - Rectangle into Squares

    // Description:
    // The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
    
    // alternative text
    
    // Can you translate this drawing into an algorithm?
    
    // You will be given two dimensions
    
    // a positive integer length
    // a positive integer width
    // You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.
    
    // Examples in general form:
    // (depending on the language)
    
    //   sqInRect(5, 3) should return [3, 2, 1, 1]
    //   sqInRect(3, 5) should return [3, 2, 1, 1]
      
    //   You can see examples for your language in **"SAMPLE TESTS".**
    // Notes:
    // lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth. (See kata, Square into Squares. Protect trees! http://www.codewars.com/kata/54eb33e5bc1a25440d000891 for this problem).
    
    // When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.
    
    

function sqInRect(lng, wdth){
if (lng === wdth) return null
    
    let result = []
    
    while(lng != wdth){         //until square, remove square equal to the shortest dimension
      if(lng>wdth){
        result.push(wdth)
        lng -= wdth
      }else if(lng<wdth){
        result.push(lng)
        wdth -= lng
      }
    }
    result.push(result[result.length-1])      //add one more square of the same size now that lng == wdth
    
    return result
  }
  sqInRect(5, 3)