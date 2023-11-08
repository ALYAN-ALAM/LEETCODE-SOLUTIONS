// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let unique = new Map()
    let output = []
    
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length-2;i++){
        let left = i+1
        let right = nums.length - 1
        while(left<right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum==0){
                let triplet = [nums[i],nums[left],nums[right]];
                let tripletKey = triplet.join(",")
                if(unique.has(tripletKey)){
                    unique.set(tripletKey,unique.get(tripletKey)+1)
                }
                else{
                    unique.set(tripletKey,1)
                }
                left++
                right--
            }
            else if(sum>0){
               right--
            }
            else{
                left++
            }
        }

    }
    unique.forEach((count,key)=>{
        let arr = key.split(",").map(Number)
        output.push(arr)
    })

    return output
};