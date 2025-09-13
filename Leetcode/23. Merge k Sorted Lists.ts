// 23. Merge k Sorted Lists - Hard 

// Description:

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted linked list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.

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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let heap: MaxHeap<ListNode> = new Heap((a:ListNode, b: ListNode)=> a.val - b.val) 
    for (const list of lists){
        if (list) heap.insert(list)
    }
    let head: ListNode = new ListNode(0)
    let current = head
    while (!heap.isEmpty()){
        let lowest = heap.extractRoot()
        if (lowest.next) heap.insert(lowest.next)
        current.next = lowest
        current = current.next
    }
    return head.next


};

//maybe loop through the array of lists. then add the items to the correct spots in a new linked list
    //each loop looping through the 'ans' list
    //this is like n^2 ? 
//maybe a heap ? the lowest in the heap gets removed and put back in the next position ? 