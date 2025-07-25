// 547. Number of Provinces - Medium 

// Description:

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

 

// Example 1:


// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Example 2:


// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
 

// Constraints:

// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

// Solution:

function findCircleNum(isConnected: number[][]): number {
    let checked = new Set()
    let count = 0
    for (let i=0; i<isConnected.length; i++){ //check every array
        if (!checked.has(i)){ //if the city has already been checked skip it
            count ++ //else start new province recursive check
            check(i)
        } 
    }
    function check(i){
        checked.add(i)  //log all the provinces checked. never check [0][0] or [1][1] because its always 1. 
        for(let j=0; j<isConnected[i].length; j++){
            if (!checked.has(j) && isConnected[i][j] === 1) check(j) 
        }
    }
    return count
};

//given matrix nxn where matrix[i][j] equals 1 if the i'th city and the j'th city are directly connected, else 0
//ie [[1,1,0][1,1,0][0,0,1]] -> 2. theres 3 cities. first array, 1,1,0 shows 0,0 and 0,1. so city 0 and city 1 are connected
//                                                    second array 1,1,0 shows 1,0 and 1,1. so city 0 and city 1 are connected
//                                                   third array 0,0,1 shows 2,2. so city 2 is not connected to anything
//therefore there is one province of 0-1 and another of 2. so return 2 provinces. 
//
//[[1,0,0][0,1,0][0,0,1]] - > each city is not connected to another. 1 province. 

//recursive check. for every i, check the j values. if i=j skip it. record all the j values that match the given i value
//next i value, get different j values. need to somehow put these all in the same bucket or a new one
//say 0 is connected to 1 but not 2, then 1 is connected to 2. how to put them in the same bucket
//maybe recursive call while recording the cities that have been checked already. if city has been checked just skip all i and j values 
//check city 1. add 0 and 1 to the list. now check 1. dont even check i=0 or 1 because theyre already in the list
//now skip to city 2. check 1 add it to the list

