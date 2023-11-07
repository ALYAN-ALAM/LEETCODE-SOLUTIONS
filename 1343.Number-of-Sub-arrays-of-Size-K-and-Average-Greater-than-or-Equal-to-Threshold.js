// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

 /**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    
    let start = 0
    let end = 0
    let total = 0
    let sum = 0


    while(end<arr.length){
        sum = sum + arr[end]
        if(end- start + 1 >= k){
    
        let avg = sum / k 
        if(avg >= threshold)  {          
            total++
        }
        let first = arr[start]
        sum =  sum - first
        start++
    }
    end ++
    }
    return total

};