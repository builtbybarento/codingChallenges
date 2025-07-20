// 19. Remove Nth Node From End of List - Medium 

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let point = head
    let count = 0
    while (point!=null){
        count++
        point=point.next
    }
    count -= n //count now represents the place of the node to be removed
    if (count===0) return head.next
    point = head
    while(count>0){
        count--
        if(count===0) point.next = point.next.next
        else point = point.next
    }
    return head
};

//first need to iterate the list to find the total length and which 

//Follow up: solve in 1 pass

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let point1 = head
    let point2 = head
    while (n>0){
        n--
        point2 = point2.next
    }
    if (!point2) return head.next
    while (point2){
        point2 = point2.next
        if (point2 === null) point1.next = point1.next.next
        else point1 = point1.next
    }
    return head
     //should be space between point and point2 so when point2 hits null we delete point
};