// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false
    }

    let charCount = new Map()

    for(let i=0;i<s.length;i++){
        if(charCount.has(s[i])){
            charCount.set(s[i],charCount.get(s[i])+1)
        }
        else{
            charCount.set(s[i],1)
        }
         if(charCount.has(t[i])){
            charCount.set(t[i],charCount.get(t[i]) - 1)
        }
        else{
            charCount.set(t[i],-1)
        }
    }
    for(let count of charCount.values() ){
        if(count != 0){
            return false
        }
    }
    
   return true
};