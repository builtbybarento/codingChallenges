// 2807. Insert Greatest Common Divisors in Linked List - Medium 

// Description:

// Given the head of a linked list head, in which each node contains an integer value.

// Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

// Return the linked list after insertion.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:


// Input: head = [18,6,10,3]
// Output: [18,6,6,2,10,1,3]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
// - We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
// - We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
// - We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
// There are no more adjacent nodes, so we return the linked list.
// Example 2:


// Input: head = [7]
// Output: [7]
// Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
// There are no pairs of adjacent nodes, so we return the initial linked list.
 

// Constraints:

// The number of nodes in the list is in the range [1, 5000].
// 1 <= Node.val <= 1000

// Solution: less optimal but off the top of my head

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    function gcd(a,b){
        if (b<a) return gcd(b,a) //a will always be the lower number
        // if ((b/a)%1===0) return a //if b divides by a then a is the gcd
        let gcf = 1
        for(let i=1; i<=Math.sqrt(a); i++){
            if (a%i === 0){
                let factor = a/i
                if (b%i===0) gcf = i //might not be the highest factor
                if (b%factor===0) return factor //automatically the highest factor
            }
        }
        return gcf
    }

    let curr = head
    let next = curr.next

    while (next){
        let gcf = gcd(curr.val, next.val)
        let newNode = new ListNode(gcf, next)
        curr.next = newNode
        curr = next
        next = next.next
    }
    return head
};

//given a linked list of integers
//insert a new node between every pair of adjeacent nodes with a value equal to the greatest common divisor of them
//so we need a helper functino to find the greatest common divisor and we're set

//greatest common divisor is check the smaller number between the two, then check the square root and every number under it. then check num/
//i swear python has this built in but lets do it manual
//can check every number upwards up to root n then use the inverse of it
//ie. 6 and 10. check 6. then check 2-> 3. 3->2. ans is 2. 

//Optimized solution with Euclidean Algorithm and 1 less pointer:

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    let curr = head
    while(curr && curr.next){
        const newNode = new ListNode(gcd(curr.val, curr.next.val), curr.next)
        curr.next = newNode
        curr = newNode.next
    }
    return head
};
function gcd(a,b){
        while (b!==0){
            [a,b] = [b, a%b]
        }
        return a
}