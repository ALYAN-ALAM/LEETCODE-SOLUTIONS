// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root==null){
        return []
    }
    let stack = [root]
    let result  = []
    let leftToRight = true
    while(stack.length!=0){
        let levelSize = stack.length
        let currentLevel = []
        for(let i=0;i<levelSize;i++){
            let currElement = stack.shift() 
            if(leftToRight){
                currentLevel.push(currElement.val)

            }
            else{
                 currentLevel.unshift(currElement.val)
            }
            if(currElement.left){
                    stack.push(currElement.left)
                }
            if(currElement.right){
                    stack.push(currElement.right)
            }
        }
        if(leftToRight){
        leftToRight = false
        }
        else{
           leftToRight = true 
        }
        result.push(currentLevel)

    }
    
    return result
};