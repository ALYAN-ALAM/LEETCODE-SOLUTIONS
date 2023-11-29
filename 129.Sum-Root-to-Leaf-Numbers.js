// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

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
 
var sumNumbers = function(root,currentSum = 0) {
    if (root == null){
        return 0
    }
    currentSum = currentSum * 10 + root.val
    if(root.left == null && root.right == null){
        return currentSum
    }

    return sumNumbers(root.left,currentSum) + sumNumbers(root.right,currentSum)
    
};