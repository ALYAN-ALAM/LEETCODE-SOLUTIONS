// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [start,end] = newInterval

    let left =[]
    let right = []

    for(let i=0;i<intervals.length;i++){
        let curr = intervals[i]
        if(start > curr[1]){
            left.push(curr)
        }
        else if (end < curr[0]){
            right.push(curr)
        }
        else{
            start = Math.min(start,curr[0])
            end = Math.max(end,curr[1])
        }

    }

    return [...left,[start,end],...right]
 



}


// /**
//  * @param {number[][]} intervals
//  * @param {number[]} newInterval
//  * @return {number[][]}
//  */
// var insert = function(intervals, newInterval) {
//     let len=intervals.length
//     // if(newInterval[0]>=intervals[len-1][1]){
//     //     intervals.push(newInterval)
//     //     return intervals
//     // }
//     // else if (newInterval[0]<=intervals[0][0] && newInterval[1]<=intervals[0][1]) {
//     //     intervals.unshift(newInterval)
//     //     return intervals
//     // }
//     if(len==0){
//         intervals.push(newInterval)
//         return intervals
//     }
//     else if (len==1){
//         //  if(intervals[0][1]>=newInterval[0]){
//         //     intervals[0][1] = Math.max(intervals[0][1],newInterval[1])
//         // }
//         // else {
//         //     intervals.push(newInterval)
//         // }
//         // return intervals
//         if(newInterval[0]!==intervals[0][0]){
//             if(newInterval[0]>intervals[0][0]){
//                 intervals.push(newInterval)
//             }
//             else{
//                  intervals.unshift(newInterval)
//             }
//         }
//         else{
//             if(newInterval[1]>intervals[0][1]){
//                 intervals.push(newInterval)
//             }
//             else{
//                  intervals.unshift(newInterval)
//             }
//         }
        

//     }

//     let prev = intervals[0]
//     let result = [prev]
//     for(let i=1;i<intervals.length;i++){
//         let curr = intervals[i]
//         if(len!==1){
//         if(prev[1]>=newInterval[0]){
//             prev[1] = Math.max(prev[1],newInterval[1])
//         }
//         }
//         if(prev[1]>=curr[0]){
//             prev[1] = Math.max(prev[1],curr[1])
//         }
//         else{
//             result.push(curr)
//             prev = curr
//         }

//     }
//   return result  
// };