//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(array) {
  let temp;
  let i = 0;

  do {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
    i++;
  } while (i < array.length / 2);

  return array;
}

console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
