const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getMonth || date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }
  if (date.getMonth(date) === 11 || date.getMonth(date) === 0 || date.getMonth(date) === 1) {
    return seasons[0];
  }
  if (date.getMonth(date) >= 2 && date.getMonth(date) <= 4) {
    return seasons[1];
  }
  if (date.getMonth(date) >= 5 && date.getMonth(date) <= 7) {
    return seasons[2];
  }
  if (date.getMonth(date) >= 8 && date.getMonth(date) <= 10) {
    return seasons[3];
  }
}

module.exports = {
  getSeason
};
