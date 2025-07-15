// 605. Can Place Flowers - Easy

// Description:

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

// Solution:

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i=0; i<flowerbed.length; i++){
        if (flowerbed[i]===0 && flowerbed[i-1]!==1 && flowerbed[i+1]!==1){
            n--
            flowerbed[i]=1
        }
    }
    return n<=0
};

//given an integer array flowerbed with only 1's and 0's. and integer n
//return true if n new flowers can be planted in the flowerbed without violating no-adjacent rule, else false
//0 means empty spot, 1 means not empty
//[1,0,0,0,1] , 1 => true. if n=2 then its false
//need to figure out how many spots have 0 and nothing beside it. can loop through checking adjacents and counting, replacing the true spots with stuff