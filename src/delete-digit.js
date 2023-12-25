const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n), Number);
  if (arr[0] < arr[1]) {
    arr.splice(0, 1);
  } else if (arr[0] > arr[1]) {
    arr.splice(1, 1);
  } else {
    arr.sort((a, b) => a - b);
    return Number(n.toString().replace(arr[0], ''));
  }
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
