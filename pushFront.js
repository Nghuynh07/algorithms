//given an array and value insert value at the beginning of array w/o using built in function

function pushFront(arr, value) {
  arr.push(value);

  let temp = arr[arr.length - 1];
  console.log(temp);

  for (let i = arr.length - 1; i > 0 - 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

const result = pushFront([1, 2, 3, 10], 1000);

console.log(result);
