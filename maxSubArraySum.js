//given an array of integers and a number, find the maximum sum with the length of the number passed to the function
// maxSubArraySum([100,200,300,400],2)  // 700
// maxSubArraySum([1,4,2,10,23,3,1,0,20,],4)  // 39
// maxSubArraySum([-3,4,0,-2,6,-1],2)  // 5
// maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1],2)  // 5
// maxSubArraySum([2,3],3)  // null

function maxSubArraySum(array, n) {
  if (n > array.length) return null;

  let tempSum = 0;
  let maxSum = tempSum;

  for (let i = 0; i < n; i++) {
    tempSum += array[i];
  }

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubArraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubArraySum([2, 3], 3));
