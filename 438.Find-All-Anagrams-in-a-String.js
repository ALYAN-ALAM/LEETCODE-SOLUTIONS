// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  let arr = [];

  // Store occurences of each alphabets in hashmap
  let charCount = new Map();

  for (let i = 0; i < p.length; i++) {
    let char = p[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  let start = 0;
  let end = 0;
  let count = p.length;

  while (end < s.length) {
    let curr = s[end];
    if (charCount.has(curr)) {
      charCount.set(curr, charCount.get(curr) - 1);
    }

    if (end - start + 1 == count) {
      let isValidAnagram = true;
      for (let value of charCount.values()) {
        if (value != 0) {
          isValidAnagram = false;
          break;
        }
      }
      if (isValidAnagram) {
        arr.push(start);
      }
      let first = s[start];
      if (charCount.has(first)) {
        charCount.set(first, charCount.get(first) + 1);
      }
      start++;
    }

    end++;
  }

  return arr;
};
