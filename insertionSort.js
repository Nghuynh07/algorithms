function insertionSort(array) {
  for (let iIndex = 1; iIndex < array.length; iIndex++) {
    let currentValue = array[iIndex];
    let currentIndex = iIndex;
    for (
      let jIndex = iIndex - 1;
      jIndex >= 0 && array[jIndex] > currentValue;
      jIndex--
    ) {
      // console.log(iIndex, jIndex);
      array[jIndex + 1] = array[jIndex];
      currentIndex = jIndex;
    }
    array[currentIndex] = currentValue;
    // console.log("New J Iteration");
  }

  return array;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
