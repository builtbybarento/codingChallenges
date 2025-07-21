// 328. Odd Even Linked List - Medium 

// Description:

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106

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

function oddEvenList(head: ListNode | null): ListNode | null {

    if (!head || !head.next) return head
    let odds = head
    let evens = head.next
    let evenshead = evens
    while (evens && evens.next){
        odds.next = evens.next
        odds = odds.next
        evens.next = odds.next
        evens = evens.next
    }//if odd number of items, even will end as null. else odd will end as null and loop will fail. exit if evens.next is null 
    odds.next = evenshead
    return head
};

//ordered list, change the order to odds followed by evens. 
//2 heads. evenstart and oddstart