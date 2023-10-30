// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  let string = s.toString();
  let i = 0;
  while (i < string.length) {
    if (string[i] == "I") {
      if (string[i + 1] == "V") {
        sum = sum + 4;
        i = i + 2;
      } else if (string[i + 1] == "X") {
        sum = sum + 9;
        i = i + 2;
      } else {
        sum = sum + 1;
        i++;
      }
    } else if (string[i] == "X") {
      if (string[i + 1] == "L") {
        sum = sum + 40;
        i = i + 2;
      } else if (string[i + 1] == "C") {
        sum = sum + 90;
        i = i + 2;
      } else {
        sum = sum + 10;
        i++;
      }
    } else if (string[i] == "C") {
      if (string[i + 1] == "D") {
        sum = sum + 400;
        i = i + 2;
      } else if (string[i + 1] == "M") {
        sum = sum + 900;
        i = i + 2;
      } else {
        sum = sum + 100;
        i++;
      }
    } else if (string[i] == "V") {
      sum = sum + 5;
      i++;
    } else if (string[i] == "L") {
      sum = sum + 50;
      i++;
    } else if (string[i] == "D") {
      sum = sum + 500;
      i++;
    } else if (string[i] == "M") {
      sum = sum + 1000;
      i++;
    }
  }
  return sum;
};
