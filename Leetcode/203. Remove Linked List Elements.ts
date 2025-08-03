// 203. Remove Linked List Elements

// Description:

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let newHead = head
    while(newHead?.val === val){
        newHead = newHead.next
    }
    let pointer = newHead
    while(pointer){
        if (pointer.next?.val===val) pointer.next = pointer.next.next
        else pointer = pointer.next
    }
    return newHead
};

//just establish a new head then skip any invalid nodes

//More consise solution with parent element

function removeElements2(head: ListNode | null, val: number): ListNode | null {
    let parent = new ListNode(1, head) //starts with value 1, next is head
    let pointer = parent

    while(pointer){
        if (pointer.next?.val === val) pointer.next = pointer.next.next
        else pointer=pointer.next
    }

    return parent.next //return the new head. the parent is ignored
};