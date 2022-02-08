//given an array, remove & return value at the beginning of the array w/o using built in methods except pop

function popFront(array) {
  let frontValue;

  let newArray = [];

  if (array.length === 0) return array;
  if (array.length === 1) {
    frontValue = array[0];
    array.pop();
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (i === 0) {
      frontValue = array[i];
      array.pop(array[0]);
    } else {
      newArray.push(array[i]);
      array.pop();
    }
  }

  for (let index = newArray.length - 1; index >= 0; index--) {
    array.push(newArray[index]);
  }

  newArray = [];

  console.log(newArray, array);
  return frontValue;
}

console.log(popFront([]));
console.log(popFront([1]));
console.log(popFront([1, 2, 3, 4, 5]));
console.log(popFront([100, 2, 1000, 4, 5]));
console.log(popFront([38, 2, 23, 4, 5, 0, 0.34, 0.00001]));
