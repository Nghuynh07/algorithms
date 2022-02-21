//write a function which accepts a number and adds up all the number from zero to the number passed into the function

function recursiveRange(n) {
  if (n === 0) return 0;

  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(4));
