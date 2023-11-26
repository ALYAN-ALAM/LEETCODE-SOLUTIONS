// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
var levelOrder = function(root) {
    if(root == null){
        return []
    }

   let stack = [root]
   let result = []
    while(stack.length!=0){
        let levelSize = stack.length
        let eachLevelArr = []
        for(let i=0;i<levelSize;i++){
        let currElement = stack.shift()
        eachLevelArr.push(currElement.val)

        if(currElement.left){
            stack.push(currElement.left)
        }
         if(currElement.right){
            stack.push(currElement.right)
        }
                    
        }
        result.push(eachLevelArr)


    } 

    return result
    
};