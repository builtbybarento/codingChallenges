// 7 kyu - Linked Lists - Push & BuildOneTwoThree

// Description:
// Linked Lists - Push & BuildOneTwoThree

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

// The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null

// Solution: 

function Node(data, next = null) {

  this.data = data;
  this.next = null;
}

function push(point, data) {
  let node = new Node(data) //new node object node is created with the data, pointing to null. after null is null so its fine if the data is a list
  node.next = point  //the previous data is now the next of this new object
  return node //returns new updated linked list with new item in front. ie push (2->3, 1)=> 1->2->3
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1)
}
// //need to call push function on itself until 3function push(head, data) {
//   var node = new Node(data);
//   node.next = head;
//   return node;
// }