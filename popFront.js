//given an array, remove & return value at the beginning of the array w/o using built in methods except pop

function popFront(array) {
  let frontValue;

  let newArray = [];

  //check if array is empty or has 1 element and return that element since there is just 1 value
  if (array.length === 0) return array;
  if (array.length === 1) {
    frontValue = array[0];
    array.pop();
  }

  //if all test cases passed, loop through each array backward b/c  pop is removing the end of the array
  //also if i = 0 then we want to set the frontValue to that index so it can be returned later
  //Since value at the beginning of the array always going to be at zero, we can just set the value immediately
  //but programmatically maybe better to set at 'i'
  for (let i = array.length - 1; i >= 0; i--) {
    if (i === 0) {
      frontValue = array[i];
      array.pop();
    } else {
      newArray.push(array[i]);
      array.pop();
    }
  }

  //loop backward again at newArray and push each value back into array
  //basically returning both arrays to its original form but without the first value of the array

  for (let index = newArray.length - 1; index >= 0; index--) {
    array.push(newArray[index]);
  }

  newArray = [];

  // console.log(newArray, array);
  return frontValue;
}

console.log(popFront([]));
console.log(popFront([1]));
console.log(popFront([1, 2, 3, 4, 5]));
console.log(popFront([100, 2, 1000, 4, 5]));
console.log(popFront([38, 2, 23, 4, 5, 0, 0.34, 0.00001]));

function popFrontSecondTake(array) {
  let temp = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }
  array[array.length - 1] = temp;
  array.pop();
  return temp;
}

console.log(popFrontSecondTake([1, 2, 10, 20, 4.3]));

//2,10,20,4.3
