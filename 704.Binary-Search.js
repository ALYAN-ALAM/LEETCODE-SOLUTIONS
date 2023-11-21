// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let res = -1
    let start = 0
    let end = nums.length-1
    
    while(start<=end){
       let middle = start + Math.floor((end - start)/2)
        if(nums[middle]==target){
          return middle
        }
       if(target<nums[middle]){
           end = middle - 1
       }
       else{
           start = middle + 1
       }
    
    
    }
    
    return res
    };