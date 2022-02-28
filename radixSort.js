function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log(getDigit(7323, 0));

function getDigitCount(num) {
  if (num === 1) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(getDigitCount(7323));

function getMostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, getDigitCount(nums[i]));
  }
  return maxDigit;
}

console.log(getMostDigits([33, 8930, 28328, 11, 2, 11304455]));

function radixSort(nums) {
  let maxDigitsCount = getMostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      bucket[digit].push(nums[i]);
    }
    // console.log(bucket);
    nums = [].concat(...bucket);
    // console.log(nums);
  }
  return nums;
}
console.log(radixSort([23, 345, 4532, 12, 34565]));
