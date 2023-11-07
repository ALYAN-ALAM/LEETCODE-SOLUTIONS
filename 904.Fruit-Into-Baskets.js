// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let windowStart = 0;
  let windowEnd = 0;
  let maxFruits = 0;
  let CurrMax = 0;

  let fruitCount = new Map();

  while (windowEnd < fruits.length) {
    curr = fruits[windowEnd];
    if (fruitCount.size < 2) {
      if (fruitCount.has(curr)) {
        fruitCount.set(curr, fruitCount.get(curr) + 1);
        CurrMax++;
      } else {
        fruitCount.set(curr, 1);
        CurrMax++;
      }
      windowEnd++;
      if (CurrMax > maxFruits) {
        maxFruits = CurrMax;
      }
    } else if (fruitCount.size == 2) {
      if (fruitCount.has(curr)) {
        fruitCount.set(curr, fruitCount.get(curr) + 1);
        CurrMax++;
      } else {
        fruitCount.set(curr, 1);
        //   CurrMax--
      }
      if (CurrMax > maxFruits) {
        maxFruits = CurrMax;
      }
      windowEnd++;
    } else {
      let first = fruits[windowStart];
      if (fruitCount.has(first)) {
        if (fruitCount.get(first) <= 1) {
          fruitCount.delete(first);
          // CurrMax--
        } else {
          fruitCount.set(first, fruitCount.get(first) - 1);
          CurrMax--;
        }
      }
      windowStart++;
    }
  }

  return maxFruits;
};
