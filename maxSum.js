//write a function that accepts an array and a number n, return the maximum sum of n consecutive elements in the array
//maxSum([1,2,5,2,8,1,5], 2) => 10
//maxSum([1,2,5,2,8,1,5], 4) => 17

function maxSum(array, num) {
  if (num > array.length) {
    return null;
  }

  let max = 0; //or -infinity if negative involves

  for (let i = 0; i < array.length - num + 1; i++) {
    let sum = 0;
    for (let j = 0; j < num; j++) {
      sum += array[i + j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 2));

function second(array, num) {
  if (num > array.length) {
    return null;
  }

  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += array[i];
  }

  max = sum;

  for (let i = num; i < array.length; i++) {
    sum = sum - array[i - num] + array[i];
  }

  if (sum > max) {
    max = temp;
  }

  return max;
}

console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 2));
