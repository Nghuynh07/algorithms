//given an array and a target value, return two indexes where value of those indexes = the target number given with the array;
const targetNumber = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first < last) {
    let sum = nums[first] + nums[last];
    if (sum === target) {
      return [first, last];
    } else if (sum > target) {
      last--;
    } else {
      first++;
    }
  }
  return false;
};

console.log(targetNumber([3, 11, 20, 24, 90, 100, 1000], 120));

const targetNumberSecond = function (nums, target) {
  let first = 0;
  let last = nums.length - 1;

  do {
    let sum = nums[first] + nums[last];

    if (sum === target) return [first, last];
    if (sum > target) last--;
    if (sum < target) first++;
  } while (first < last);
  return false;
};

console.log(targetNumberSecond([3, 11, 20, 24, 90, 100, 1000], 120));
