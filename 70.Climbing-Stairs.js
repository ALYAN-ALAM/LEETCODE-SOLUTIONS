// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n===0 || n===1 ){
      return 1
    }

    let ways = new Array(n+1)
    ways[0] = 1
    ways[1] = 1
    for(let i = 2;i<=n;i++)
    {
      ways[i] = ways[i-1]+ways[i-2]
    }

    return ways[n]
  
};