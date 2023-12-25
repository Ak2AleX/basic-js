const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = [];
  if (options.addition || options.addition === false || options.addition === null) {
    if (options.addition === null) {
      newStr.push('null');
    } else {
      newStr.push(options.addition);
    }
    if (options.additionRepeatTimes && options.repeatTimes) {
      for (let i = 1; i < options.additionRepeatTimes; i += 1) {
        newStr.push(newStr[0]);
      }
      if (options.additionSeparator) {
        newStr = newStr.join(options.additionSeparator);
      } else {
        newStr = newStr.join('|');
      }
    }
  }
  newStr = (str + newStr);
  let result = [];
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i += 1) {
      result.push(newStr);
    }
    if (options.separator) {
      result = result.join(options.separator);
    } else {
      result = result.join('+');
    }
  } else {
    return newStr;
  }
  return result;
}

module.exports = {
  repeater
};
