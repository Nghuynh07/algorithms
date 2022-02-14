// Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result.
//Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.
//Solve the challenge WITHOUT using recursion although you are allowed to convert the integer to a string.

const sumToOne = (num) => {
  let numString = num + "";
  //   console.log(typeof numString);
  //sum = null, if sum = 0, it'll run infinitely
  let sum = null;

  do {
    sum = 0;
    for (let i = 0; i < numString.length; i++) {
      //   console.log(numString[i]);
      sum += +numString[i];
    }
    numString = sum + "";
    // console.log(typeof numString);
  } while (sum >= 10);

  return sum;
};

console.log(sumToOne(982));
