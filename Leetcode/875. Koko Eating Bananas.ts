// 875. Koko Eating Bananas - Medium 

// Description:

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
 

// Constraints:

// 1 <= piles.length <= 104
// piles.length <= h <= 109
// 1 <= piles[i] <= 109

// Solution: //replaced .reduce method with for of loop for performance

function minEatingSpeed(piles: number[], h: number): number {
    let left = 0
    let right = Math.max(...piles) //the max time per pile / the minimum time per pile
    while(left != right){
        let mid = Math.floor((left+right)/2)
        //console.log(left, mid, right)
        let hours = 0
        for(const pile of piles){
            hours += Math.ceil(pile/mid)
        }
        if (hours > h) left = mid + 1 //if takes longer than the required time need to make a higher rate
        else right = mid //if takes less than required time or equal because we need to optimize more
    }
    return right
};

//n piles of bananas, the i'th pile has piles[i] bananas and the guards are coming in h hours
//bananaperhour speed is k. each hour eat k bananas. if theres less than k she eats them all
//want to eat as slow as possible while finishing all the bananas. return minimum integer k 
//ex piles = [3,6,7,11], h=8 ---> k=4. first pile takes 1h, 2nd takes 2h, 3rd 2h, 4th 4h.
//ex piles = [30, 11, 23, 4, 20], h=5 --> k=30. must eat 30 bananas an hour

//can try checking hours between piles.length and Math.max(...piles) * Math.floor(h/piles.length). must be at least 1 
    //10h with 5 piles can take minimum of 2h per pile
    //9h with 5 piles must also be at least 1 piles per hour
    //15h with 5 piles can take 3h per pile 15h, 5 piles, 100 per pile. 100/3 maximum  100 / (15 / 5). 34/hr
    //ex 2 has 5 piles and h=5. so max is 30 / ceil(1/1)
    //ex 3 has 5 piles and h=6. Math.ceil(6/5)=2  so max is 30/2 ? no shoould be floor 30/1
    //  if h was 10 and 5 piles then we could do max = 30/2