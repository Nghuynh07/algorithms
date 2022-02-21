//write a function  which takes an array of number and return the product of all of them

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));
