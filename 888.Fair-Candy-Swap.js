// Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let alice_Sum = 0
    let bob_Sum = 0
    for (let i=0;i<aliceSizes.length;i++){
        alice_Sum +=aliceSizes[i]
    }
    for (let i=0;i<bobSizes.length;i++){
        bob_Sum +=bobSizes[i]
    }

    let desired = ( alice_Sum + bob_Sum ) / 2

    let delta = desired - alice_Sum
    
    let bob_set = new Set(bobSizes)

   

     for (let i=0;i<aliceSizes.length;i++){
        let required = delta + aliceSizes[i]
        if(bob_set.has(required)){
            return [aliceSizes[i],required]
        }


    }

        return [-1,-1]
   

    
};