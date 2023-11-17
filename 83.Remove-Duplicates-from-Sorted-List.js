// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head == null || head.next == null){
        return head
    }
    let curr = head
    while(curr.next!= null){
        let nextNum = curr.next
        if(nextNum.val==curr.val){
            curr.next=nextNum.next
        }
        else{
             curr=curr.next
        }
    }
    return head

};