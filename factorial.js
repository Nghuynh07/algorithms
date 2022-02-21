//write function factorial accept a number and return the factorial of that number
// factorial(0) = 1
//factorial(4) = 4 x 3 x 2 x 1

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
