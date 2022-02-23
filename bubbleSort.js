// function bubbleSort(array) {
//   let noSwap;
//   for (let i = 0; i < array.length; i++) {
//     noSwap = true;
//     for (let j = 0; j < array.length - i; j++) {
//       console.log(array[i], array[j]);
//       if (array[j] > array[j + 1]) {
//         let temp = array[j + 1];
//         array[j + 1] = array[j];
//         array[j] = temp;
//         noSwap = false;
//       }
//     }
//     console.log(array);
//     if (noSwap) {
//       console.log("break");
//     }
//   }
//   return array;
// }

// console.log(bubbleSort([3, 2, 1, 8, 9, 10, 12, 14]));
function bubbleSort(array) {
  let noSwap;
  for (let i = 0; i < array.length; i++) {
    noSwap = true;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        noSwap = false;
      }
      console.log(array);
    }
    if (noSwap) {
      console.log("break");
    }
  }
  return array;
}

console.log(bubbleSort([0, 20, 11, 30, 2, 3]));
