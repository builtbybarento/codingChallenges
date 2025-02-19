// 2. Add Two Numbers - Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Solution: 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  //step 1 convert to arrays
  let n1 = []
  let n2 = []
  
  while(l1){
      n1.unshift(l1.val)  //insert back to front
      l1 = l1.next
  }
  while(l2){
      n2.unshift(l2.val)
      l2 = l2.next
  }
  
  
  //step 2 convert to proper nums and add
  //must assume big numbers 
  
  let num = BigInt(n1.join('')) + BigInt(n2.join('')) //num is a BigInt object that holds the large number
  console.log(num)
  
  //step 3 convert to new linked list
  num = String(num).split('').reverse() //convert BigInt to array and reverse it 
  console.log(num)
  let head = new ListNode() //first value is num [0]
  let curr = head
  
  for(const digit of num) {
      curr.next = new ListNode(1*digit) //add each digit as a new node
      curr = curr.next //moves the pointer along to the newly added digit
  }
  console.log(head.next)
  return head.next //ignore the first value 
  };
  
  
  //just need to convert these to arrays, reverse the arrays, convert to nums and add together then back to linked list. 3 steps
  