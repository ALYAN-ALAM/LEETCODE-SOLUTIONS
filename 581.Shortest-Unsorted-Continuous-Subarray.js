// Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

// Return the shortest such subarray and output its length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

    let left = 0
    let right = nums.length - 1
    let total = 0
    let leftSame = 0
   let rightSame = 0
    if(nums.length == 1)   {
        return 0
    }
   
    while(left < right && nums[left] <= nums[left+1]) {
        left++
    }
    if(left === right){
        return 0
    }
    while(right>left && nums[right] >= nums[right-1]){
        right--
    }
   
    let minVal = Math.min(...nums.slice(left,right+1)) 
    let maxVal = Math.max(...nums.slice(left,right+1))
   
   while(left >= 0 && nums[left]>minVal){
       left--
   }
   while(right < nums.length && nums[right]<maxVal){
       right++
   }
   
   return right - left -1
   };