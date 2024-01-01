// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // let mySet = new Set();
 let arr = []
 arr.push([]);

 for(let i=0;i<nums.length;i++){
     let arrLen = arr.length;
     for(let j=0;j<arrLen;j++){
         let mySet = arr[j].slice()
         // mySet.add(nums[i])
         mySet.push(nums[i])
        
         arr.push(mySet)
         

     }
 }

 return arr

};