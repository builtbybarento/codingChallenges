// 206. Reverse Linked List - Easy 

// Description:

// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

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

function reverseList(head: ListNode | null): ListNode | null {
        if (!head || !head.next) return head
        let point = head
        let stack = []
        while (point.next){
            stack.push(point)
            point = point.next
        }
        head = point
        while (stack.length>0){
            point.next = stack.pop()
            point = point.next
        }
        point.next = null
        return head
};

//No stack solution (3 pointers?):

function reverseList2(head: ListNode | null): ListNode | null {
        if (!head || !head.next) return head
        let neww = null
        let current = head
        let prev = current
        while (current){
            current = current.next
            prev.next = neww
            neww = prev
            prev = current
        }
        return neww
        //current 1->2. 1->null. neww = 1->null. prev moves to 2. current ->3. prev2->1->null. neww = 2->1->null. prev = 3 
};