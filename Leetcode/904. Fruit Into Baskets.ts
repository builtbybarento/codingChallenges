// 904. Fruit Into Baskets - Medium

// Description:

// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

 

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
 

// Constraints:

// 1 <= fruits.length <= 105
// 0 <= fruits[i] < fruits.length

// Solution:

function totalFruit(fruits: number[]): number {
    let max = 1
    let left = 0
    
    let first = [fruits[0], 1]
    let second = [-1, 0]

    for (let i=1; i<fruits.length; i++){
        if (fruits[i]!==first[0] && fruits[i]!==second[0]){ //if the fruit is not equal to either 
           
            while(first[1]>0 && second[1]>0){ //while count is not 0
                // console.log('test')
                fruits[left] == first[0] ? first[1]-- : second[1]-- //-1 from the basket of the left 
                left++
            }
            // replace the basket with the new value
            if (first[1]===0){  //if first is now empty
                first[0] = fruits[i]
            }else{              //if second is empty
                second[0] = fruits[i]
            }
        }
        if (fruits[i]==first[0]){ 
                first[1]++
                // console.log('+1 to first')
        }else{
                second[1]++
                // console.log('+1 to second')
        }
        const current = 1 + i - left
        // console.log(current, left, i, first, second)
        if (current>max) max = current
        
    }
    return max
};

//only 2 baskets and can hold only single type of fruit
//starting from any tryy must pick exactly 1 fruit from every tree while moving to the right. must fit in the baskets
//once you reach a fruit that cannot fit you must stop. return the max number of fruits you can pick
//ex. 1,2,1 --> 3 because all three are only 2 different types
//ex. 0,1,2,2 --> 3 because you can start at 1, skipping 0.
//ex 1,2,3,2,2 -> 4 because you can start at 2 and skip 1. 2,3,2,2 
//i think we can do a sliding window type of thing where each item is 
//start at 0. 1. move over until 0 isnt there anymore. 
//0,1,2,2 start at 0. record this as the first number. record 1 as the second number 
//get to 2. left = 0 so -- until 0 or 1 are at 0. then second num = 2. 