// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseList = function (start,end){
    let curr = start
   let prev = null

while(prev!=end){
       let nextNum = curr.next
       curr.next = prev
       prev = curr
       curr = nextNum
   }
   
}
var reverseKGroup = function(head, k) {

   if(head==null || head.next==null || k==1) {
       return head
   }
   
   let start = head
   let end = head
   for (let i=0;i<k - 1;i++){
       end = end.next
       if(end == null) {
           return head
       }
   }

   let nextHead = reverseKGroup(end.next,k)
   reverseList(start,end)

   start.next = nextHead
   

   return end

  
};

