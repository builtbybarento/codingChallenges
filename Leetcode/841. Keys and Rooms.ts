// 841. Keys and Rooms - Medium 

// Description:

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

 

// Example 1:

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation: 
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.
// Example 2:

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
 

// Constraints:

// n == rooms.length
// 2 <= n <= 1000
// 0 <= rooms[i].length <= 1000
// 1 <= sum(rooms[i].length) <= 3000
// 0 <= rooms[i][j] < n
// All the values of rooms[i] are unique.

// Solution:

function canVisitAllRooms(rooms: number[][]): boolean {
    let keys: Set<number> = new Set()
    function visit(i){
        keys.add(i)
        rooms[i].forEach(key=>{
            if(!keys.has(key) && key<rooms.length) visit(key)
        })
    } visit(0)
    for (let i=0; i<rooms.length; i++){
        if (!keys.has(i)) return false
    }
    return true //true if every room is successfully checked
};

//check every 'room'. for every room n, must have key value = n , except room 0. 
//ie rooms = [[1],[2],[3],[4]] -> true. enter room 0 and collect key 1, unlocks room 1 get key 2, unlock room 3 get key 3, all rooms unlocked

//maybe we can keep track of the keys . if key exists enter the room
//i guess the order of entering the rooms doesnt matter
//so as long as the key exists outside of the room every room will open
//can check first for the keys that exist not in the room. then check if all the room keys exist ? no
//record every room visited. then visit every room per key you  found unless its been visited