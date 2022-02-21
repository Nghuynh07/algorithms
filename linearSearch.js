// function linearSearch(array, value) {
//   if (array.length === 1 && array[0] !== value) return -1;
//   if (array.length === 1 && array[0] === value) return 0;

//   return array.indexOf(value) || -1;
// }

function linearSearchSecond(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

console.log(linearSearchSecond([1, 3, 10, 22, 0.1, 3], 1000));
console.log(linearSearchSecond([1, 3, 10, 22, 0.1, 3], 0.1));
console.log(linearSearchSecond([1], 0.1));
console.log(linearSearchSecond([1], 1));
