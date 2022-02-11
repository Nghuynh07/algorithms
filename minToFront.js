//given an array, move lowest elements to front and shift backward any elements previously ahead of it
//do without using built in methods

function minToFront(array) {
  let temp = array[0];
  let index;
  for (let i = 1; i <= array.length; i++) {
    if (array[i] < temp) {
      temp = array[i];
      index = i;
    }
  }

  for (let i = index; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = temp;

  return { array, temp, index };
}

console.log(minToFront([1, 2, 4, 5, 0, 3]));
