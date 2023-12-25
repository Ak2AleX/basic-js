const { NotImplementedError } = require('../extensions/index.js');

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
  let matrix1 = new Array(matrix.length).fill(0);
  matrix1 = matrix1.map((item) => item = new Array(matrix[0].length).fill(0));
  console.log(matrix1);
  const spot = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  console.log(spot);
  for (let i = 0; i < matrix.length; i += 1) {
    let x = 0;
    let y = 0;
    console.log(x);
    console.log(y);
    for (let k = 0; k < matrix[i].length; k += 1) {
      if (matrix[i][k] === true){
        for (let n = 0; n < spot.length; n += 1) {
          x = i + spot[n][0];
          y = k + spot[n][1];
          console.log(x);
          console.log(y);
          if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[i].length) {
            console.log(matrix1);
            matrix1[x][y] += 1;
          }
        }
      }
    }
  }
  return matrix1;
}

module.exports = {
  minesweeper
};
