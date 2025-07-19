// 735. Asteroid Collision - Medium 

// Description:

// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

// Constraints:

// 2 <= asteroids.length <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

// Solution:

function asteroidCollision(asteroids: number[]): number[] {
    let stack: number[] = []
    for(const a of asteroids){
        //if moving right or first item in stack or last item is also moving left
        if (a>0 || !stack[0] || stack[stack.length-1]<0) stack.push(a)
        //else a collision will definitely occur
        else{
            //while the last stack item is moving right and smaller than the leftmoving asteroid
            while (Math.abs(a)>stack[stack.length-1] && stack[stack.length-1]>0){
                stack.pop()
            }
            //if stack is empty or last item is moving left
            if (!stack[0] || stack[stack.length-1]<0) stack.push(a)

            if (stack[stack.length-1] === Math.abs(a)){
                stack.pop()
            }
        }
    }
    return stack
};
//given array of integers represeting asteroids in a particular order in space.
//the absolute value represent the asteroid size and sign represents direction (right or left-). same speed
//if two asteroids meet, the smaller one will explode. if theyre the same size both will explode. 
//two asteroids moving the same direction will never meet
//return the resulting state after all collisions.
//ex. [5,10,-5] -> -5 gets crushed by 10 and results in [5,10]
//ex. [8,-8]->[] both are destroyed
//ex. [10,2,-5]->[10]

//loop through the array. if a negative is found, compare it with the value on its left. 
    //if left is higher, delete the negative. if no left leave it.
    //can do a stack
    //ie push 5. push 10. if -5 is smaller than 10 skip -5. if -10 is the same, skip and pop()
    //ie. 10, 2, -5. pop(2). then skip 5. 
