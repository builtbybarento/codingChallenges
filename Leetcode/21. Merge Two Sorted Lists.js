// 21. Merge Two Sorted Lists - Easy 

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Solution: 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {

  let dummy = new ListNode()
  let curr = dummy //pointer to our dummy list

  while(list1 && list2){
      if(list1.val>list2.val){
          curr.next = list2;
          list2 = list2.next
      }else{
          curr.next = list1;
          list1 = list1.next;
      }
      curr = curr.next 
  }
  curr.next = list1 || list2 //add the remainder
  return dummy.next 
}


//