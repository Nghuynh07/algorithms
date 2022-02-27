function pivotPoint(array, start = 0, end = array.length + 1) {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };

  //   function swap(arr, i, j) {
  //     let temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }

  let pivot = array[start];
  let swapInx = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapInx++;
      swap(array, swapInx, i);
    }
  }

  swap(array, start, swapInx);
  return swapInx;
}

// console.log(pivotPoint([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotPoint(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
