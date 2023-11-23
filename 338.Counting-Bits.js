// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 /**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans = new Array(n + 1).fill(0);

   // Iterate from 1 to n
   for (var i = 1; i <= n; i++) {
       // Use the fact that ans[i] = ans[i / 2] + (i % 2)
       ans[i] = ans[Math.floor(i / 2)] + (i % 2);
   }

   return ans;
};