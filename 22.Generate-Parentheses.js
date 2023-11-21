// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    findAll("(",1,0,result,n)
    return result
    
};

var findAll = function(curr,openNum,closeNum,result,n) {
    if(curr.length == n*2){
        result.push(curr)
        return
    }
    if(openNum<n){
       findAll(curr+"(",openNum+1,closeNum,result,n) 
    }
    if(closeNum<openNum){
        findAll(curr+")",openNum,closeNum+1,result,n) 
    }


}