// 5 kyu - Molecule to atoms

// Description:
// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

// Solution:

export function parseMolecule(formula:string): Record<string,number> {
  let arr = [...formula]
  for (let i=0; i<arr.length; i++){
    if ( arr[i]!==arr[i].toUpperCase() ){
      arr.splice(i-1, 2, (arr[i-1]+arr[i]) )
    }//remove the two letters and replace with a single combination
    if (Number(arr[i]) && Number(arr[i+1])){
        arr.splice(i, 2, arr[i]+arr[i+1]) 
    }//combine any 2 adjacent digits to a single number in the array 
  }
  while (arr.includes(')') || arr.includes('}') || arr.includes(']') ){
    let closingIndex = arr.findIndex(x=>x===")" ||x==="}" ||x==="]")
    console.log('closing', closingIndex)
    let openingIndex = closingIndex - arr.slice(0, closingIndex).reverse().findIndex(x=>x==="(" ||x==="{" ||x==="[") - 1 
    let inside = arr.slice(openingIndex+1, closingIndex)
    if (Number(arr[closingIndex+1])){
      console.log('if')
      //remove the brackets and the number outside of it. insert the inside.repeat according to number outside bracket
      //assumes 1 digit maximum outside brackets. 
      arr.splice(openingIndex, closingIndex-openingIndex+2, inside.join('').repeat(Number(arr[closingIndex+1])))
    }else{
      console.log('else')
      arr.splice(openingIndex, closingIndex-openingIndex+1, inside.join(''))
      //else just remove the brackets 
    }
  }
  console.log(arr)
  //left with the expanded formula without brackets. ie K4ONSO3SO3ONSO3SO3

  let expandedArr = arr.join('').split('')
  for (let i=0; i<expandedArr.length; i++){
    if ( expandedArr[i]!==expandedArr[i].toUpperCase() ){
      expandedArr.splice(i-1, 2, (expandedArr[i-1]+expandedArr[i]) )
    }//remove the two letters and replace with a single combination
    if (Number(expandedArr[i]) && Number(expandedArr[i+1])){
        expandedArr.splice(i, 2, expandedArr[i]+expandedArr[i+1]) 
    }//combine any 2 adjacent digits to a single number in the array 
  }
  console.log(expandedArr)
  let ans: Record<string,number> = {}
  for(let i=0; i<expandedArr.length; i++){
    if(Number(expandedArr[i])){
      ans[expandedArr[i-1]] += (Number(expandedArr[i]) - 1)
    }
    else if (ans.hasOwnProperty(expandedArr[i])){
      ans[expandedArr[i]] += 1 
    }else{
      ans[expandedArr[i]] = 1
    }
  }
  
  
  
  return ans
}
//first lets deal with any lower case letters
//return a record object
//()2 means two of whatevers in the () bracket
//[xyz2] means 2 of z
//ab[cds(so3)2]4 means 3*O , 2* cds(so3) and 4 cds(so3)2

//personally, i would look at the innermost bracket and see SO3. SO3 means 3*O and 1*S
//then the outer bracket ON(SO3)2 means 2*SO3 and 1 ON
//then K4[...]2 means 2*ON and 2*(2*(SO3)) 

//maybe to find the answer we can take kkkk + (O + N + (S+OOO) * 2) * 2 
//gives us kkkk o n s ooo s ooo o n s ooo s ooo 

//doesnt really matter if () {} or [] 
//once we get the string of individual atoms its easy to convert to object

//start left. if letter followed by number, push num amount of letter. ie K4 push 4 k's
//

//maybe break down k4[ON(SO3)2]2 into k4 [ONSo3So3]2 to k4 ONSo3So3 ONSo3So3
//progressively break down the brackets inside out until we just have linear formulas 
//so maybe start by finding right side bracket ) ] } 
//if there are none , just skip this parsing step
// find ) as the first closing bracket
// reversefind from the index of ) to find the index of (
// if there is a number beside ), repeat the inner sequence SO3 2 times. 
// now replace the (SO3)2 with just SO3 SO3
//find the next closing bracket ]. beside it is a 2.
//replace [ONSO3SO3]2 with ONSO3SO3.repeat(2)
//left with linear k4 ONSO3SO3 ONSO3SO3 which is easier to parse 

// while loop includes(')'||']'||'}')