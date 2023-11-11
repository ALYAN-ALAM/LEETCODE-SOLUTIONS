// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return intervals
  //    intervals =intervals.sort((a,b) => a - b)
   intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  let prev =  intervals[0]
  let result = [prev]
  for(let i=1;i<intervals.length;i++){
      var curr = intervals[i]
  
      if(curr[0] <= prev[1]){
          prev[1] = Math.max(prev[1], curr[1])
      }
      else{
          result.push(curr)
          prev = curr
      }
  
  
  }
  
  return result
  
  };