//given a sorted array, remove duplicates values without using built in methods

function removeDuplicates(array) {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }

  let newIndex = array.length - 1 - i;

  for (let m = newIndex; m < array.length; m++) {
    array.pop();
  }

  return array;
}

console.log(removeDuplicates([1, 1, 3, 4, 4, 5, 6, 7, 7, 9, 9]));
console.log(removeDuplicates([]));
