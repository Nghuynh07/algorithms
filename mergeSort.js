function mergeSort(arrayOne, arrayTwo) {
  let finalArray = [];
  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      finalArray.push(arrayOne[i]);
      i++;
    } else {
      finalArray.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length) {
    finalArray.push(arrayOne[i]);
    i++;
  }
  while (j < arrayTwo.length) {
    finalArray.push(arrayTwo[j]);
    j++;
  }

  return finalArray;
}

// console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));

function merge(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = merge(array.slice(0, mid));
  let right = merge(array.slice(mid, array.length));
  return mergeSort(left, right);
}

console.log(merge([10, 24, 76, 73, 72, 1, 9]));
