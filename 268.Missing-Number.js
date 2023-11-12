// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i =0
    while(i<nums.length){

        if(nums[i]<nums.length && nums[i]!=i){
            [nums[nums[i]],nums[i]] = [nums[i],nums[nums[i]]]
        }
        else{
            i++
        }

    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i){
            return i
        }
    }

    return nums.length
    
};