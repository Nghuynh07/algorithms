//Given an array, index, and value. Insert value into at the given index without using build in methods

function removeInsertAt(array, index, value) {
  for (let i = array.length - 1; i >= index; i--) {
    array[i + 1] = array[i];
  }
  array[index] = value;
  return array;
}

console.log(removeInsertAt([3, 5, 0, 11, 3, 4], 2, 20));
