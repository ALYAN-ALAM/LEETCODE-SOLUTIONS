// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list./**
 * Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
   if(list1==null){
       return list2
   }
   else if(list2==null){
      return  list1
   }
   else {
   // ______________________"Solution No 1 Without recursion"____________________
       let dummyNode = new ListNode(-1)
       let head = dummyNode
       while (list1!=null && list2!=null){
        if(list1.val<list2.val){
            let nextNum = list1.next
            head.next = list1
            head = list1
            list1 = nextNum

        }
        else{
            let nextNum = list2.next
            head.next = list2
            head = list2
            list2 = nextNum
            
        }
       }
       if(list1==null){
        head.next = list2 
       }
       if(list2==null){
           head.next = list1
       }

       return dummyNode.next



   //______________________"Solution No 2 Use recursion"_________________________

   // if(list1.val<list2.val){
   //     list1.next = mergeTwoLists(list1.next,list2)
   //     return list1
   // }
   // else{
   //     list2.next = mergeTwoLists(list2.next,list1)
   //     return list2
   // }



   }
};