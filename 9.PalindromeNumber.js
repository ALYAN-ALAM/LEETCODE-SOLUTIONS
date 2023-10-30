// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let left = 0;
  const numberString = x.toString();
  if (numberString.length == 1) {
    return true;
  }
  let len = Math.floor(numberString.length / 2);
  let right = numberString.length - 1;
  let bool = false;
  while (left < len) {
    if (numberString[left] == numberString[right]) {
      bool = true;
      left++;
      right--;
    } else {
      return false;
    }
  }
  return bool;
};
