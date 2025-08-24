// 24. Swap Nodes in Pairs - Medium 

// Description:

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Explanation:



// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]

 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

// Solution:

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    const prefix = new ListNode(0, head)
    let last = prefix
    let current = head
    while(current && current.next){
        last.next = current.next            //last now points to the next instead of current
        current.next = current.next.next    //current skips next and points to nextnext
        last.next.next = current            //next points to current (now swapped)

        last = current              //iterate last to the now current
        current = current.next      //iterate the current to the current.next 
        
    }
    return prefix.next
};


//Other more convoluted solution that I did first: 

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head
    let current = head
    let next = current.next
    head = next
    current.next = next.next
    next.next = current //swapped the first 2 values
    while(current.next && current.next.next){
        let last = current
        current = current.next //3
        next = current.next    //4
        current.next=next.next  //3 points to null
        next.next = current //4 points to 3
        last.next = next //1 now points to 4
    }
    return head


};

//just swap every 2 adjacent node without changing values
//similar to reversing? 

//current, next
//current.next = next.next
//next.next = current
//
//1234
//then 2134
//3.next = 4.next
//1.next = 4
