//given an array and a value, write a function that return the index of the value in the array
//if value is not in the array return -1;

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }
  if (array[middle] === value) return middle;

  return -1;
}

console.log(binarySearch([0, 2, 3, 5, 6, 10, 11, 33, 100], 17));
