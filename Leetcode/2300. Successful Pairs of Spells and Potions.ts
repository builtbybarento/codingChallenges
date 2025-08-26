// 2300. Successful Pairs of Spells and Potions - Medium 

// Description:

// You are given two positive integer arrays spells and potions, of length n and m respectively, where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.

// You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.

// Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.

 

// Example 1:

// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]
// Explanation:
// - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
// - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
// - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
// Thus, [4,0,3] is returned.
// Example 2:

// Input: spells = [3,1,2], potions = [8,5,8], success = 16
// Output: [2,0,2]
// Explanation:
// - 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.
// - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful. 
// - 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful. 
// Thus, [2,0,2] is returned.
 

// Constraints:

// n == spells.length
// m == potions.length
// 1 <= n, m <= 105
// 1 <= spells[i], potions[i] <= 105
// 1 <= success <= 1010

// Solution:

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let pots = potions.sort((a,b)=> b-a)
    let res = []
    //console.log(pots)

    for (let i=0; i<spells.length; i++){
        let left = 0
        let right = pots.length-1
        if (spells[i]*pots[left] < success){
            spells[i] = 0
            continue
        }//if the highest doesnt fit set 0
        if(spells[i]*pots[right] >= success){
            spells[i] = right + 1
            continue
        }//if the lowest fits then add all of them
        let mid = Math.floor((left+right)/2)
        //console.log(left, right, 'mid ' + pots[mid])
        while (mid!=left){
            if (spells[i]*pots[mid] >= success) left = mid //new low-high
            else right = mid //if not success, this is the new highest low
            mid = Math.floor((left+right)/2)
            //console.log('i' + i, 'left-right' , left, right, 'mid ' + mid)
        }
        spells[i] = mid + 1 
        //keep checking until mid = left ?  
    }
    return spells
};

//given 2 arrays of pos int spells and potions length n and m where spells[i] is the strengtho f spell[i] and potions[j] is strength of j potion
//also given integer success. a spell and potion pair is a success if their product is at least equal or more than success integer
//return an integer array pairs of length n where pairs[i] is the number of potions that will form a succesfull pair with the i'th spell
//ex spells = [5,1,3] potions = [1,2,3,4,5], sucess = 7 ---> [4,0,3]. 

//brute force: check all spell x potions 
//optimized: check binary search on sorted potion strength
//check if middle is lower or higher. if higher, this is the new high. if lower, this the new low
//keep going until middle = higher ? 
