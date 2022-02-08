//given an array and value insert value at the beginning of array w/o using built in function

function pushFront(arr, value) {
  let newArray = [];
  newArray.push(value);

  for (let i = 0; i <= arr.length - 1; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
}

const result = pushFront([1, 2, 3, 10], 1000);

console.log(result);
