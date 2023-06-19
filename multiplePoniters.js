/**
 * Creating pointers or values that correspond to an index or position and
 * move towards the beginning, end or middle based on a certain condition
 *
 * very efficient for solving problem with minimal space complexity as well.
 */

/**
 * Ex. Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. retun a array that
 * includes both values that sum to zero or undefined if pair doesnot exist
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,-1,0,3]) // undefined
 */

function sumZero(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

/**
 * Ex.2 Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negetive numbers in the array,
 * but it  will always be sorted.
 * countUniqueValues([1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 */

function countUniqueValues(arr = []) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2]));
