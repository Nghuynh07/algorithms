//given an array, move lowest elements to front and shift backward any elements previously ahead of it
//do without using built in methods

function minToFront(array) {
  if (array.length === 0) return array;

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

  return array;
}

console.log(minToFront([]));
console.log(minToFront([1]));
console.log(minToFront([1, 2]));
console.log(minToFront([1, 2, 3]));
console.log(minToFront([1, 2, 3, 4]));
console.log(minToFront([1, 2, 4, 5, 0, 3]));
console.log(minToFront([11, 2, -3, 5, -1, -1000]));
console.log(minToFront([-2, 3, 4, -20, 0, 3]));
