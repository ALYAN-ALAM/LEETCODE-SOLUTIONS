// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    let duplicates = []
    
    for (let i=0;i<nums.length;i++){
      let index = Math.abs(nums[i]) - 1;
      if(nums[index] < 0){
        duplicates.push(Math.abs(nums[i]))
      }
      else{
        nums[index] *= -1
      }
    }
    
      return duplicates
    
    }
    //     let i = 0
    //     let result = []
    //     if(nums.length==1){
    //         return result
    //     }
    
    //     while(i<nums.length){
    //         if(nums[i]!=i+1 && nums[i] == nums[nums[i]-1]){
    //              [nums[i],nums[nums[i]-1]]=[nums[nums[i]-1],nums[i]]
    //         }
    //         else if (nums[i] != i + 1) {
    //       result.push(nums[i]);
    //       i++;}
    //         else{
    //             i++
    //         }
    //     }
    //     // for(let j=0;j<nums.length;j++){
    //     //     if(nums[j]!=j+1){
    //     //         result.push(nums[j])
    //     //     }
    
    //     // }
    //     return result
    
     
    
      
    