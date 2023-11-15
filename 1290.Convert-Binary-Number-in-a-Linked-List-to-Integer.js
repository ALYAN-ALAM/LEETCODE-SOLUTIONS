// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

// Return the decimal value of the number in the linked list.

// The most significant bit is at the head of the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {

    let decimal = 0
    let curr = head
    let prev = null
    while(curr!=null){
        let nextnum = curr.next
        curr.next = prev
        prev= curr
        curr = nextnum
    }
    curr = prev
    // prev = null
    let i = 0
    while(curr!=null){
        decimal += curr.val * Math.pow(2, i)
        curr = curr.next
        i++
    }
    return decimal
};

 