// 2462. Total Cost to Hire K Workers - Medium 

// Description:

// You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

// You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

// You will run k sessions and hire exactly one worker in each session.
// In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
// For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
// In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
// If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
// A worker can only be chosen once.
// Return the total cost to hire exactly k workers.

 

// Example 1:

// Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
// Output: 11
// Explanation: We hire 3 workers in total. The total cost is initially 0.
// - In the first hiring round we choose the worker from [17,12,10,2,7,2,11,20,8]. The lowest cost is 2, and we break the tie by the smallest index, which is 3. The total cost = 0 + 2 = 2.
// - In the second hiring round we choose the worker from [17,12,10,7,2,11,20,8]. The lowest cost is 2 (index 4). The total cost = 2 + 2 = 4.
// - In the third hiring round we choose the worker from [17,12,10,7,11,20,8]. The lowest cost is 7 (index 3). The total cost = 4 + 7 = 11. Notice that the worker with index 3 was common in the first and last four workers.
// The total hiring cost is 11.
// Example 2:

// Input: costs = [1,2,4,1], k = 3, candidates = 3
// Output: 4
// Explanation: We hire 3 workers in total. The total cost is initially 0.
// - In the first hiring round we choose the worker from [1,2,4,1]. The lowest cost is 1, and we break the tie by the smallest index, which is 0. The total cost = 0 + 1 = 1. Notice that workers with index 1 and 2 are common in the first and last 3 workers.
// - In the second hiring round we choose the worker from [2,4,1]. The lowest cost is 1 (index 2). The total cost = 1 + 1 = 2.
// - In the third hiring round there are less than three candidates. We choose the worker from the remaining workers [2,4]. The lowest cost is 2 (index 0). The total cost = 2 + 2 = 4.
// The total hiring cost is 4.
 

// Constraints:

// 1 <= costs.length <= 105 
// 1 <= costs[i] <= 105
// 1 <= k, candidates <= costs.length

// Solution:

function totalCost(costs: number[], k: number, candidates: number): number {
    let minHeapL: MinPriorityQueue<number>
    let minHeapR: MinPriorityQueue<number>
    const length = costs.length

    if (candidates>=costs.length/2){
        minHeapL = MinPriorityQueue.fromArray(costs)
        minHeapR = new MinPriorityQueue<number>()
    }else{
        minHeapL = MinPriorityQueue.fromArray(costs.slice(0, candidates))
        minHeapR = MinPriorityQueue.fromArray(costs.slice(length-candidates, length))
    }

    minHeapR.enqueue(Infinity)
    minHeapL.enqueue(Infinity) //in case they become empty

    let left = candidates       //keep track of number of candidates on the left and right including chosen ones
    let right = candidates
    let totalCost = 0

    //compare the heaps and add the lowest value to total
    while(k>0){
        if (minHeapL.front() <= minHeapR.front()){
            totalCost += minHeapL.dequeue() //remove and add to total cost
            if (left+right < length){
                minHeapL.enqueue(costs[left])   //add the next leftmost value
                //add 1 to the left border
                //console.log(costs[left])
                 left++
            }
        }else{//minheapR.front<minHeapL.front
            totalCost += minHeapR.dequeue()
            if (left+right < length){ //if we arent already looking at all remaining elements
                minHeapR.enqueue(costs[length-1-right]) //add the next rightmost value to right-heap
                //console.log(costs[length-1-right])
                right++
            }
            
        }k--  
        //console.log('total: ' + totalCost)      
    }
  
    return totalCost
};


//given a integer array costs where costs[i] is the cost of hiring the i'th worker
//also given two integers k and candidates. we want to hire exaclty k workers
//run k sessions and hire one worker in each session
//in each hiring session, choose the worker with the lowest cost from either the first candidates worker or the last candidates worker
    //break ties by the smallest index
    //ex costs=[3,2,7,7,1,2] candidates = 2 then in the first hiring session we will choose the 4th worker because they have the lowest cost (1) 
    //then in the second hiring session we choose the 1st worker because they have the same lowest cost as the 4th worker(2) but they have the smallest index
    //what does it mean choose the worker with the lowest cost from either the first candidates workers or the last candidates workers ? 
//if there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. 
//return the total cost to hire k workers

//ex: costs=[17,12,10,2,7,2,11,20,8], k=3, candi=4   ------> 11
//in the first round, we look at the first 4 workers and the last 4 workers. lowest cost is 2, so take the 2 with the lowest index
//in the 2nd hiring, we are now looking at all 8 remaining candidates. the lowest cost is 2 again
//in the 3rd hiring theres now 7 remaining candidates. lowest is 7. 
    //total is 2 + 2 + 7 = 11

//make 2 heaps, left and right. keep track of how many items on left and how many on right. once they add up to the original array size stop adding
//if candidates is equal or less than costs.length just add everything to left heap, right heap holding infinity