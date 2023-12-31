// Given the head of a singly linked list, return true if it is a palindrome
//  or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const reverse = (head) => {
    let curr = head
    let prev = null
    let next

    while(curr!==null){
        next = curr.next
        curr.next = prev
        prev = curr 
        curr = next
    }
    return prev
 }

var isPalindrome = function(head) {
    let fast = head
    let slow = head
    let startPointer =  head
    let len = 0

    while(fast && fast.next ){
        slow = slow.next
        fast = fast.next.next
        len++
    }

    

    let mid = reverse(slow)

    while(len > 0){
        len--
        if(mid.val !== startPointer.val) return false
        mid = mid.next
        startPointer = startPointer.next
    }
    return true
};