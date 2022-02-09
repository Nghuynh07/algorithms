//write a function given an array and an index, remove the value at the index of that array without built in function

function removeAt(array, index) {
  let returnedValue = array[index];
  let temp;
  for (let i = index; i < array.length - 1; i++) {
    temp = array[i + 1];
    array[i + 1] = array[i];
    array[i] = temp;
    console.log(array);
  }

  array.pop();
  return returnedValue;
}

console.log(removeAt([3, 0, 2, 4, 6, 7], 2));

//each iteration the array should be
//iteration starts at the index, anything prior stays the same
//i = 2 array = [3,0, 4, 2, 6, 7]
//i=3 array = [3,0,4,6,2,7]
//i = 4 array = [3,0,4,6,7,2]
//then pop array = [3,0,4,6,7]
//return 2
