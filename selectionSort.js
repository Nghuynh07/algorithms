function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(i, j);
      console.log(`iteration ${i}/${j}`);
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    let temp = array[i];
    array[i] = array[lowest];
    array[lowest] = temp;
  }

  return array;
}

console.log(selectionSort([5, 4, 3, 1, 2, 0, 11]));
