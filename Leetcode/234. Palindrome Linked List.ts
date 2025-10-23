// 234. Palindrome Linked List - Easy

// Description:

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 

// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false
 

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9
 

// Follow up: Could you do it in O(n) time and O(1) space?

// Solution:

function isPalindrome(head: ListNode | null): boolean {
    let sequence: number[] = []
    while (head){
        sequence.push(head.val)
        head = head.next
    }
    for(let i=0; i<sequence.length/2; i++){
        if (sequence[i] != sequence[sequence.length-1-i]) return false
    }
    return true
};

//the best way is the 2 pointers, reversing the list as you go on
//other option is to write to array and compare the left and right. slower though. 
//if we reverse the array, then once the fast pointer reachest the end start the comparison with the slow pointer and a new pointer at the new head. lets start with this solution 

//Optimized: 
function isPalindrome(head: ListNode | null): boolean {
    let fast: ListNode = head
    let slow: ListNode = head
    let last: ListNode = null
    while (fast){
        if (fast.next){
            fast = fast.next.next
            let curr: ListNode = slow //mark the current slow which will now point to null
            slow = slow.next //move the slow pointer forward
            curr.next = last //then the current will point to the last thing or null. so 1 points to null
            last = curr //now the new last thing will be the current thing we just reversed. this becomes the new head. 
        } else{
            slow = slow.next
            fast = null
        }
    } //but what happens when the remaining list and the reversed list are different lengths ? lets just try this first

    //console.log(slow, last)
    while (slow || last){
        if (slow.val != last.val) return false
        slow = slow.next
        last = last.next 
    }
    return true
};
