// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left==right){
        return head
    }
   const dummyNode = new ListNode(-1)
   dummyNode.next = head
    let prev = dummyNode
    let curr = dummyNode.next
   for(let i=0 ;i < left-1;i++){
    // let nextNum = curr.next
    // curr.next
    prev = curr
    curr = curr.next
    }
    let before = prev
    let first = curr
    prev = null
    for(let i=0;i<right-left+1;i++){
    let nextNum = curr.next
    // curr.next = prev
    curr.next =prev
    prev = curr 
    curr = nextNum 
    }

    before.next = prev 
    first.next = curr

    return dummyNode.next 
};