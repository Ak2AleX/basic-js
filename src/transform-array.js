const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let control = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (control.includes(arr[i])) {
      if (arr[i] === control[0] && i !== 0 && arr[i - 2] !== control[1]) {
        result.pop();
      } else if (arr[i] === control[2] && i !== 0 && arr[i - 2] !== control[1]) {
        result.push(result[result.length - 1]);
      } 
    } else {
      result.push(arr[i]);
    }
    if (arr[i - 1] === control[3]) {
      result.push(arr[i]);
    }
    if (arr[i - 1] === control[1]) {
      result.pop();
    }
  }
  return result;
}

module.exports = {
  transform
};
