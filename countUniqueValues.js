//write a function that returns how many unique numbers there are in the array
//number can be negative but will always be sorted
//example: [11,3,11,4,5,0] return 5 b/c there are 5 unique numbers in the array, x2 11 only counts as 1

function countUniqueValues(array) {
  let count = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      count += 1;
    }
  }

  return count;
}
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 15, 16, 17, 1]));

function countUniqueValuesSecond(array) {
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValuesSecond([1, 1, 2, 3, 3, 4, 5, 5]));
