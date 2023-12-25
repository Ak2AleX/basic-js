const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length; i += 1) {
    for (let k = 0; k < matrix[i].length; k += 1) {
      if (matrix[i][k] === 0) {
        if (matrix[i + 1] && matrix[i + 1][k] !== 0) {
          matrix[i + 1][k] = -1; 
        }
      }
    }
  }
  matrix = matrix.map((item) => item.filter((value) => value > 0));
  return matrix.flat().reduce((acc, item) => acc + item, 0);
}

module.exports = {
  getMatrixElementsSum
};
