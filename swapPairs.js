//swap positions of successful pairs of values of given array. If length is odd, do not change the final element
//test case: [1,2,3,4] => [2,1,4,3]

function swapPairs(array) {
  let temp;
  let odd;
  if (array.length % 2 === 1) {
    odd = array[array.length - 1];
    array.length = array.length - 1;
  }

  for (let i = 0; i <= array.length - 1; i = i + 2) {
    temp = array[i + 1];
    array[i + 1] = array[i];
    array[i] = temp;
  }
  if (odd) array.push(odd);
  return array;
}

console.log(swapPairs([2, 3, 4, 5, 6, 7, 8, 9]));
console.log(swapPairs([2, 3, 4, 5, 6, 7, 8, 9, 10]));
