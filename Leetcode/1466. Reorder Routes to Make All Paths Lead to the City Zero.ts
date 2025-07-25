// 1466. Reorder Routes to Make All Paths Lead to the City Zero - MediaKeyStatusMap

// Description:

// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

 

// Example 1:


// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 2:


// Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
// Output: 2
// Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
// Example 3:

// Input: n = 3, connections = [[1,0],[2,0]]
// Output: 0

// Solution:

function minReorder(n: number, connections: number[][]): number {
    let count = 0;
    let checked = new Set([0])
    function check(connects){
        let skipped = []
        for(const road of connects){
            // console.log(road)
            if (checked.has(road[0])){//the road leading to 0 is leading to another city
                count++
                checked.add(road[1])
            }else if (checked.has(road[1])){//the road leading to 0 is being led to
                checked.add(road[0])
            }else{
                skipped.push(road)
            }
        }
        if (skipped.length>0) check(skipped.reverse())
    }
    check(connections)
    return count
};

//each road is represented by connect ion where connections[i] = [ai, bi] represents a road from city ai to city bi

//ex. n=6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
//this shows city 0 connects to city 1. city 1 connects city 3. city 2 connects city 3. city 4 connects to 0 and city 5. 

//need to change the roads so they lead towards city 0. i guess the roads are 1 way only ?  kinda stupid idea but ok lets run it

//in this case we need to changer the first array [0,1] -> [1,0] so city 1 flows into city 0
//also [1,3] -> [3,1] so it flows into city 1, then 0.
//[2,3] is fine because 3 flows into 0
//[4,0] is fine, [4,5]->[5,4] . total of 3 changes made, return 3

//need to count the changes made. first need to check for 0's and make sure everythign leads to the 0's
//check [0.1]-> 1,0. count +=1. record 1 and 0 in the set because they are flowing properly into 0
//check 1,3. set includes 1. so this also needs to be changed to 3,1. now record 3 in the set and count ++ 
//check 2,3. 2 flows into 3, which is already in the set. this is fine
//check 4,0. flows into 0 which is in the set. this is fine
//check 5,4. 4 flows into 5 which needs to be changed because 4 is in the set. add 5 to set. no more connections. 

//say this was in a different order like [4,5][2,3][1,3][4,0][0,1]
//we could check 4,5 and not know where to go, 2,3, 1,3, etc until 4,0. then you can add 4 and 0 in the set. 0,1 add 1 and count++
//then need to iterate again. [4,5] count++ add 5. 2,3 skip. 1,3 add 1, count++. then check again. 2,3-> all good. now done 