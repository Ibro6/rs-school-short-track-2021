/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let left = 0;
  let right = array.length - 1;
  let index;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const guess = array[mid];
    if (guess === value) index = mid;
    if (guess > value) right = mid - 1;
    else left = mid + 1;
  }

  return index;
}

module.exports = findIndex;
