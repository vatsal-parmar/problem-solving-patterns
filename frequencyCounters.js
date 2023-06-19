/**
 * This pattern uses objects or sets to collect values/frequecies of values.
 * This can often avoid the need for nested loops or O(N^2) operations with array or string.
 */

/**
 * Ex: write a function called same, which accepts two arrays. The function
 * should return true if every value in the array has it's corresponding value
 * squered in the second array. The frequency of values must be the same.
 * same([1,2,3],[4,1,9]) // true
 * same([1,2,3],[1,9]) // false
 * same([1,2,1],[4,4,1]) // false
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const fq1 = {};
  const fq2 = {};

  for (const val of arr1) {
    fq1[val] = (fq1[val] || 0) + 1;
  }

  for (const val of arr2) {
    fq2[val] = (fq2[val] || 0) + 1;
  }

  for (const key in fq1) {
    if (!(key ** 2 in fq2)) {
      return false;
    }
    if (fq2[key ** 2] !== fq1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [9, 4, 1]));
