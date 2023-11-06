// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // First need to stor occurences in hash map

  let charCount = new Map();

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  let start = 0;
  let end = 0;
  let count = s1.length;

  while (end < s2.length) {
    let char = s2[end];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) - 1);
    }
    if (end - start + 1 == count) {
      let isValid = true;
      for (let value of charCount.values()) {
        if (value != 0) {
          isValid = false;
          break;
        }
      }
      if (isValid) {
        return true;
      }
      let first = s2[start];
      if (charCount.has(first)) {
        charCount.set(first, charCount.get(first) + 1);
      }
      start++;
    }

    end++;
  }

  return false;
};
