const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map((item) => item.split('.').reverse());
  let result = new Object();
  for (let i = 0; i < domains.length; i += 1) {
    let dom = '';
    for (let k = 0; k < domains[i].length; k += 1) {
      dom += '.' + domains[i][k];
      if (result[dom]) {
        result[dom] += 1;
      } else {
        result[dom] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
