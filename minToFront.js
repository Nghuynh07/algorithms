//given an array, move lowest elements to front and shift backward any elements previously ahead of it
//do without using built in methods

function minToFront(array) {
  let lowestValue = array[0];
  let index;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowestValue) {
      lowestValue = array[i];
      index = i;
    }
  }

  for (let i = index; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = lowestValue;
  return array;
}

console.log(minToFront([4, 2, 1, 3, 5]));

function minToBack(array) {}

function insertMin(array, index) {}

function removeMin(array) {}
