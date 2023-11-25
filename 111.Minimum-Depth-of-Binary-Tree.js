// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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
 * @return {number}
 */
var minDepth = function(root) {
    if(root==null){
        return 0
    }
    let depth = 1
    let stack = [root]
    while(stack.length!==0)
    {
        const levelSize = stack.length
        for(let i=0;i<levelSize;i++){
            let currNode = stack.shift()
            if(currNode.left == null&&currNode.right == null){
                return depth
            }
            if(currNode.left !== null){
                stack.push(currNode.left)
            }
        
            if(currNode.right !== null){
                stack.push(currNode.right)
            }
        }    
        depth++
        
    }
    return depth
};
