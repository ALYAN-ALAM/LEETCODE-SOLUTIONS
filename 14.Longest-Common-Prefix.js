// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  bool = true;
  let i = 1;
  let j = 0;
  if (strs.length == 0) {
    return "";
  } else if (strs.length == 1) {
    return strs[0];
  } else {
    while (i < strs.length) {
      if (
        strs[i] &&
        strs[i - 1] &&
        strs[i].charAt(j) == strs[i - 1].charAt(j)
      ) {
        if (i == strs.length - 1) {
          prefix = prefix + strs[i].charAt(j);
          if (strs[i].charAt(j + 1) != "") {
            i = 0;
            j++;
          }
        }

        i++;
      } else {
        bool = false;
        break;
      }
    }
  }
  return prefix;
};
