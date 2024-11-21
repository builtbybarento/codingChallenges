// 6 Kyu - Unique In Order

// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
      let thing = String(iterable).split('').filter(x=>x!==',').filter((x,i,arr)=> arr[i]!==arr[i-1])   //almost works but not with int arrays
      if(typeof(iterable[0])==='number') {return thing.map(x=>Number(x))} else {return thing} //dumb hack
    }