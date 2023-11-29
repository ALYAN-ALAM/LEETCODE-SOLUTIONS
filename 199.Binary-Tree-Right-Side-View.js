// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root == null){
        return []
    }
    let result = []

    let queue = [root]
    while(queue.length!=0){
        let levelSize = queue.length 
        for(let i = 0 ;i < levelSize ;i++){
            let currElem = queue.shift()

            if(i === levelSize-1){
                result.push(currElem.val)
            }
             if(currElem.left){
            queue.push(currElem.left)
            
            }
            if(currElem.right){
              queue.push(currElem.right);
            }


        }
        
       
    }
    return result
};