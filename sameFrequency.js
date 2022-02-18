//write a function called sameFrequency. Given two integers, find out if the two numbers have the same frequency of digits
//sameFrequency(182,281) => true
//sameFrequency(34,14) => false
//sameFrequency(3589578,5879385) => true
//sameFrequency(22,222) => false

function sameFrequency(numOne, numTwo) {
  let numOneString = numOne + "";
  let numTwoString = numTwo + "";

  if (numOneString.length !== numTwoString.length) return false;

  let numOneObject = {};
  let numTwoObject = {};

  for (let val of numOneString) {
    numOneObject[val] = (numOneObject[val] || 0) + 1;
  }
  //{'1':1, '8': 1, '2': 1}

  for (let val of numTwoString) {
    numTwoObject[val] = (numTwoObject[val] || 0) + 1;
  }

  //{'2':1, '8': 1, '1': 1}

  console.log(numOneObject);
  console.log(numTwoObject);

  for (let val in numOneObject) {
    console.log(val);
    if (numOneObject[val] !== numTwoObject[val]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
