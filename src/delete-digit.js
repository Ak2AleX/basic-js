const { NotImplementedError } = require('../lib');

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
  let arr = String(n).split('').map(Number);
  return Math.max(...arr.map((_, i)=> {
    let arr2 = arr.slice(); 
    arr2.splice(i, 1); 
    return Number(arr2.join(''))
  }));
}

module.exports = {
  deleteDigit
};
