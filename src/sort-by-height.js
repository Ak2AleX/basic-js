const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  arr = arr.map((item) => item !== -1 ? newArr.push(item) : item = -1);
  newArr = newArr.sort((a, b) => a - b);
  arr.map((item, index) => item === -1 ? newArr.splice(index, 0, -1) : item = item);
  return newArr;
}

module.exports = {
  sortByHeight
};
