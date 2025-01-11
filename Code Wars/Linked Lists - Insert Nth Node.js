// 6 kyu - Linked Lists - Insert Nth Node

// Description:
// Linked Lists - Insert Nth

// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
// You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

// The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. The Node class is also preloaded for you in PHP.

// Solution:

function Node(data) {
	this.data = data;
	this.next = null;
}

function insertNth(head, index, data) {
	//need to put data inside list starting with head as input
	// Your code goes here.
	// Return the head of the list.
	console.log(head);
	if (!data) throw new Error("error");
	let current = head;
	let arr = [];
	while (index > 0) {
		index--;
		arr.unshift(current.data); //add current data to array so we can pop it back on
		current = current.next; //next item until current is pointing to the index we want
	}
	let node = new Node(data); //new node head is the new data
	node.next = current; //new node points to remainder of old node
	console.log(arr);
	console.log(current);
	//now just add the previous items back from array.
	for (let i = 0; i < arr.length; i++) {
		let node2 = new Node(arr[i]);
		node2.next = node;
		node = node2;
	}
	return node;
}

//cant just go to the correct index and pop it in

//need to take the items after the index and add data
//then need to add previous items to the new list. iterate again?
