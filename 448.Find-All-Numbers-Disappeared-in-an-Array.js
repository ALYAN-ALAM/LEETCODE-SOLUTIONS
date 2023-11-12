// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let i = 0
    while(i<nums.length){
        if(nums[i]!=i+1 && nums[i]!=nums[nums[i]-1]){
            [nums[nums[i]-1],nums[i]] = [nums[i],nums[nums[i]-1]]
        }
        else{
            i++
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=i+1){
            result.push(i+1)
        }
    }
    return result

};