const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [...matrix].map(array => array.map(el => (el === false) ? Number(el) : el));
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === true) {
        Number.isInteger(arr[row - 1] && arr[row - 1][col]) && arr[row - 1][col]++;
        Number.isInteger(arr[row] && arr[row][col - 1]) && arr[row][col - 1]++;
        Number.isInteger(arr[row + 1] && arr[row + 1][col]) && arr[row + 1][col]++;
        Number.isInteger(arr[row] && arr[row][col + 1]) && arr[row][col + 1]++;
        Number.isInteger(arr[row - 1] && arr[row - 1][col - 1]) && arr[row - 1][col - 1]++;
        Number.isInteger(arr[row + 1] && arr[row + 1][col + 1]) && arr[row + 1][col + 1]++;
        Number.isInteger(arr[row - 1] && arr[row - 1][col + 1]) && arr[row - 1][col + 1]++;
        Number.isInteger(arr[row + 1] && arr[row + 1][col - 1]) && arr[row + 1][col - 1]++;
      }
    }
  }
  return arr.map(x => x.map(y => y === true ? 1 : y));
}

module.exports = {
  minesweeper
};
